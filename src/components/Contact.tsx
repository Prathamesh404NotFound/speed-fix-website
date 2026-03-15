import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiClock, FiMessageCircle, FiSend } from "react-icons/fi";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    device: "",
    problem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-narrow">
        <p className="label-sm mb-3">Contact & Booking</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-12">
          Book a repair or get in touch
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="rounded-2xl p-6 md:p-8 shadow-soft bg-card"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <FiSend className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Booking Received!</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  We'll get back to you shortly. For faster service, call us or message on WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(212) 555-0199"
                  />
                </div>
                <div>
                  <label htmlFor="device" className="block text-sm font-medium text-foreground mb-1">
                    Device
                  </label>
                  <input
                    id="device"
                    type="text"
                    required
                    value={form.device}
                    onChange={(e) => setForm({ ...form, device: e.target.value })}
                    className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="iPhone 15 Pro, Samsung S24, etc."
                  />
                </div>
                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-foreground mb-1">
                    Describe the problem
                  </label>
                  <textarea
                    id="problem"
                    required
                    rows={3}
                    value={form.problem}
                    onChange={(e) => setForm({ ...form, problem: e.target.value })}
                    className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Cracked screen, battery draining fast, water damage…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
                >
                  Confirm Repair Booking
                </button>
              </form>
            )}
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">94 Hester St, New York, NY 10002</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiClock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Hours</p>
                  <p className="text-sm text-muted-foreground">Mon–Sat: 10:00 AM – 5:30 PM</p>
                  <p className="text-sm text-muted-foreground">Sun: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <a href="tel:+12125550199" className="text-sm text-primary hover:underline">
                    (212) 555-0199
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                  <a
                    href="https://wa.me/12125550199?text=Hi%20Speed%20Fix%20Mobile%2C%20I%20need%20help%20with%20my%20device"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Message us
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden shadow-soft aspect-video">
              <iframe
                title="Speed Fix Mobile location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d-73.9937!3d40.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s94+Hester+St%2C+New+York%2C+NY+10002!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
