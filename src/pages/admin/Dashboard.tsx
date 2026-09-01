import React, { useState, useEffect } from "react";
import { PlusCircle, LogOut, Trash2, CheckCircle, XCircle, Edit } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import EventFormModal from "./EventFormModal";
import { AppEvent } from "@/types/event";

export default function AdminDashboard() {
  const [events, setEvents] = useState<AppEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState<AppEvent | null>(null);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    const { data, error } = await supabase.from("events").select("*").order("created_at", { ascending: false });
    if (data) setEvents(data);
    if (error) console.error("Error fetching events:", error);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const toggleCompletedStatus = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase.from("events").update({ is_completed: !currentStatus }).eq("id", id);
    if (!error) fetchEvents();
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    const fileName = imageUrl.split("/").pop();
    if (fileName) {
      await supabase.storage.from("event_images").remove([fileName]);
    }
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (!error) fetchEvents();
  };

  const openEditModal = (event: AppEvent) => {
    setEventToEdit(event);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setEventToEdit(null);
    setIsModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
          <button onClick={handleLogout} className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <LogOut className="w-5 h-5 mr-2" /> Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">Manage Events</h2>
          <button
            onClick={openCreateModal}
            className="flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            <PlusCircle className="w-5 h-5 mr-2" /> Upload Event
          </button>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          {events.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">No events found. Upload one to get started.</div>
          ) : (
            events.map((event, index) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={event.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-border last:border-0 hover:bg-secondary/20 transition-colors"
              >
                <div className="mb-4 sm:mb-0">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                    {event.is_completed ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border">
                        Past Event
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">Active</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">Starts: {formatDate(event.start_date)}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleCompletedStatus(event.id, event.is_completed)}
                    className={`p-2 rounded-lg flex items-center justify-center transition-colors ${
                      event.is_completed
                        ? "bg-secondary text-muted-foreground hover:text-foreground"
                        : "bg-green-100 text-green-700 hover:bg-green-200"
                    }`}
                    title={event.is_completed ? "Mark as Active" : "Mark as Completed"}
                  >
                    {event.is_completed ? <XCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
                  </button>

                  {/* EDIT BUTTON */}
                  <button
                    onClick={() => openEditModal(event)}
                    className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                    title="Edit"
                  >
                    <Edit className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => handleDelete(event.id, event.image_url)}
                    className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </main>

      <EventFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onEventAdded={fetchEvents} eventToEdit={eventToEdit} />
    </div>
  );
}
