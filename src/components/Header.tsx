import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMessageCircle, FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-soft">
      <div className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
        <a href="/" className="text-xl font-bold tracking-tight text-foreground">
          Speed Fix <span className="text-primary">Mobile</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+12125550199"
            className="hidden sm:flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
            aria-label="Call now"
          >
            <FiPhone className="w-4 h-4" />
            Call
          </a>
          <a
            href="https://wa.me/12125550199?text=Hi%20Speed%20Fix%20Mobile%2C%20I%20need%20help%20with%20my%20device"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
            aria-label="Message on WhatsApp"
          >
            <FiMessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
          className="md:hidden bg-background shadow-soft px-4 pb-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+12125550199"
            className="flex items-center gap-2 mt-2 py-3 text-sm font-medium text-foreground"
          >
            <FiPhone className="w-4 h-4" />
            Call Now
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
