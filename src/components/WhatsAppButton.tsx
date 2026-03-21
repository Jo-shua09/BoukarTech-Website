export default function WhatsAppButton() {
  // Replace with your actual WhatsApp number (include country code, omit + or spaces)
  const phoneNumber = "2349039101551";

  // Optional: A default message to start the conversation
  const message = "Hello! I would like to make an inquiry.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 z-50 flex items-center justify-center hover:scale-110 hover:shadow-xl"
      aria-label="Contact us on WhatsApp"
      title="Make an inquiry"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.127.556 4.205 1.611 6.04L.018 23.985l6.046-1.584A12.012 12.012 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm3.585 17.188c-.604 1.705-3.327 2.053-4.526 1.839-1.397-.247-3.666-1.46-5.46-3.253-1.794-1.794-3.006-4.063-3.253-5.46-.214-1.199.134-3.922 1.839-4.526.49-.176.994-.131 1.258.118.257.243.606 1.157.777 1.57.172.413.208.924-.047 1.253-.254.33-.509.527-.751.78-.242.252-.497.534-.236.974.261.44 1.157 1.905 2.507 2.805 1.35 1.015 2.81 1.488 3.25 1.748.44.261.722.213.974-.047.253-.254.45-.497.78-.751.33-.255.84-.219 1.253-.047.413.172 1.327.52 1.57.777.249.264.294.768.118 1.258z" />
      </svg>
    </a>
  );
}
