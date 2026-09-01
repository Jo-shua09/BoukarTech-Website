import React, { useState, useEffect } from "react";
import { Calendar, Clock, Link as LinkIcon, Info, Loader2, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { AppEvent } from "@/types/event";

export default function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [events, setEvents] = useState<AppEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  useEffect(() => {
    const fetchPublicEvents = async () => {
      const { data, error } = await supabase.from("events").select("*").order("start_date", { ascending: true });

      if (data) setEvents(data);
      if (error) console.error("Error fetching events:", error);
      setLoading(false);
    };

    fetchPublicEvents();
  }, []);

  const filteredEvents = events.filter((event) => (activeTab === "upcoming" ? !event.is_completed : event.is_completed));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <Helmet>
        <title>Events | Boukartech</title>
        <meta name="description" content="Discover our upcoming and past events, including workshops, bootcamps, and hackathons." />
      </Helmet>

      <Layout>
        <div className="pt-28 md:pt-36 pb-20 min-h-screen relative">
          <div className="max-w-7xl mx-auto px-5">
            <SectionHeading
              tag="Our events"
              title="Boukartech"
              highlight="Events"
              description="Join us for upcoming workshops, bootcamps, and hackathons, or browse our past events."
            />

            {/* Tabs */}
            <div className="w-full max-w-7xl mx-auto mb-10 flex justify-center space-x-4">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === "upcoming"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === "past"
                    ? "bg-foreground text-background shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                Past Events
              </button>
            </div>

            {/* Events Grid / Loader */}
            <div className="w-full max-w-7xl mx-auto">
              {loading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEvents.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-muted-foreground">No {activeTab} events found.</div>
                  ) : (
                    filteredEvents.map((event) => (
                      <div
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1 group"
                      >
                        {/* Event Image */}
                        <div className="relative h-48 w-full overflow-hidden">
                          <img
                            src={event.image_url}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {event.is_completed && (
                            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                              Completed
                            </div>
                          )}
                        </div>

                        {/* Event Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">{event.title}</h3>

                          <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-primary" />
                              <span>
                                {formatDate(event.start_date)} - {formatDate(event.end_date)}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-primary" />
                              <span>
                                {formatTime(event.start_date)} - {formatTime(event.end_date)}
                              </span>
                            </div>
                          </div>

                          <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{event.description}</p>

                          {/* Footer / CTA */}
                          <div className="mt-auto pt-4 border-t border-border">
                            <span className="text-primary text-sm font-medium hover:underline">View Details &rarr;</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Event Detail Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative no-scrollbar"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background/80 rounded-full backdrop-blur-md transition-colors z-10"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>

                {/* Hero Image */}
                <div className="w-full h-64 sm:h-80 relative">
                  <img src={selectedEvent.image_url} alt={selectedEvent.title} className="w-full h-full object-cover" />
                  {selectedEvent.is_completed && (
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-md text-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                      Past Event
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">{selectedEvent.title}</h2>

                  {/* Date & Time Cards */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="flex-1 bg-secondary/40 rounded-2xl p-4 flex items-center border border-border/50">
                      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm mr-4">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Date</p>
                        <p className="text-sm font-semibold text-foreground">
                          {formatDate(selectedEvent.start_date)} - {formatDate(selectedEvent.end_date)}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 bg-secondary/40 rounded-2xl p-4 flex items-center border border-border/50">
                      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm mr-4">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Time</p>
                        <p className="text-sm font-semibold text-foreground">
                          {formatTime(selectedEvent.start_date)} - {formatTime(selectedEvent.end_date)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-3">About this event</h4>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{selectedEvent.description}</p>
                  </div>

                  {/* Additional Info */}
                  {selectedEvent.additional_info && (
                    <div className="flex items-start text-sm text-foreground bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-5 rounded-2xl mb-8">
                      <Info className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                      <span className="leading-relaxed">{selectedEvent.additional_info}</span>
                    </div>
                  )}

                  {/* CTA Footer */}
                  <div className="pt-6 border-t border-border flex justify-end">
                    {!selectedEvent.is_completed && selectedEvent.registration_link ? (
                      <a
                        href={selectedEvent.registration_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      >
                        <LinkIcon className="w-5 h-5 mr-2" />
                        Register Now
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 bg-secondary text-muted-foreground rounded-xl font-medium cursor-not-allowed border border-border"
                      >
                        Event Concluded
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Layout>
    </>
  );
}
