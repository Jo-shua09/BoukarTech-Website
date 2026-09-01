import React, { useState, useEffect } from "react";
import { X, Upload, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { AppEvent } from "@/types/event";

interface EventFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEventAdded: () => void;
  eventToEdit?: AppEvent | null;
}

export default function EventFormModal({ isOpen, onClose, onEventAdded, eventToEdit }: EventFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    registration_link: "",
    additional_info: "",
  });

  // Helper to convert DB ISO string to HTML datetime-local format
  const formatForInput = (isoString: string) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  };

  useEffect(() => {
    if (eventToEdit) {
      setFormData({
        title: eventToEdit.title,
        description: eventToEdit.description,
        start_date: formatForInput(eventToEdit.start_date),
        end_date: formatForInput(eventToEdit.end_date),
        registration_link: eventToEdit.registration_link || "",
        additional_info: eventToEdit.additional_info || "",
      });
      setImageFile(null);
    } else {
      setFormData({ title: "", description: "", start_date: "", end_date: "", registration_link: "", additional_info: "" });
      setImageFile(null);
    }
  }, [eventToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile && !eventToEdit) return alert("Please select an image.");
    setLoading(true);

    try {
      let publicUrl = eventToEdit ? eventToEdit.image_url : "";

      // Upload new image if selected
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from("event_images").upload(fileName, imageFile);
        if (uploadError) throw uploadError;

        const { data } = supabase.storage.from("event_images").getPublicUrl(fileName);
        publicUrl = data.publicUrl;
      }

      const payload = {
        title: formData.title,
        description: formData.description,
        start_date: new Date(formData.start_date).toISOString(),
        end_date: new Date(formData.end_date).toISOString(),
        registration_link: formData.registration_link,
        additional_info: formData.additional_info,
        image_url: publicUrl,
      };

      if (eventToEdit) {
        const { error } = await supabase.from("events").update(payload).eq("id", eventToEdit.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("events").insert([{ ...payload, is_completed: false }]);
        if (error) throw error;
      }

      onEventAdded();
      onClose();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      alert("Error saving event: " + message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">{eventToEdit ? "Edit Event" : "Upload New Event"}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Event Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Description *</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Event Image/Flyer {eventToEdit ? "(Optional: Leave to keep existing)" : "*"}
            </label>
            <label className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-muted-foreground hover:bg-secondary/50 cursor-pointer">
              <Upload className="w-8 h-8 mb-2 text-primary" />
              <span className="text-sm">
                {imageFile ? imageFile.name : eventToEdit ? "Click to replace existing image" : "Click to select image"}
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                required={!eventToEdit}
                onChange={(e) => {
                  if (e.target.files) setImageFile(e.target.files[0]);
                }}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Start Date & Time *</label>
              <input
                type="datetime-local"
                required
                value={formData.start_date}
                onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">End Date & Time *</label>
              <input
                type="datetime-local"
                required
                value={formData.end_date}
                onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Registration Link (Optional)</label>
            <input
              type="url"
              value={formData.registration_link}
              onChange={(e) => setFormData({ ...formData, registration_link: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Additional Info (Optional)</label>
            <input
              type="text"
              value={formData.additional_info}
              onChange={(e) => setFormData({ ...formData, additional_info: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div className="pt-4 border-t border-border flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 flex items-center"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
              {loading ? "Saving..." : eventToEdit ? "Save Changes" : "Upload Event"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
