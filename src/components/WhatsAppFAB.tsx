import { FiMessageCircle } from "react-icons/fi";

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/12125550199?text=Hi%20Speed%20Fix%20Mobile%2C%20I%20need%20help%20with%20my%20device"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-background shadow-hover transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-95"
    >
      <FiMessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFAB;
