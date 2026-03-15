import { motion } from "framer-motion";
import { FiPhone, FiMessageCircle, FiArrowRight } from "react-icons/fi";
import heroImage from "@/assets/hero-repair.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Precision smartphone repair on a professional workbench"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      <div className="relative container-narrow px-4 md:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="max-w-2xl"
        >
          <p className="label-sm text-primary mb-4">Same-Day Repairs in New York</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-background leading-tight mb-6">
            Fast. Reliable. Local Phone & Electronics Repair.
          </h1>
          <p className="text-lg md:text-xl text-background/70 mb-8 max-w-lg" style={{ textWrap: "pretty" }}>
            Same-day screen, battery, and motherboard repairs — trusted by Lower East Side locals. 90-day warranty on all parts.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
            >
              Book a Repair
              <FiArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+12125550199"
              className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
            >
              <FiPhone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/12125550199?text=Hi%20Speed%20Fix%20Mobile%2C%20I%20need%20help%20with%20my%20device"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-background/10 px-6 py-3.5 text-base font-semibold text-background ring-1 ring-background/20 transition-all duration-200 hover:-translate-y-px hover:bg-background/20 active:scale-[0.98]"
            >
              <FiMessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="mt-16 flex flex-wrap gap-6 md:gap-10 text-sm text-background/60"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            Same-Day Repairs
          </div>
          <div>94 Hester St, New York, NY 10002</div>
          <div>Mon–Sat: 10 AM – 5:30 PM</div>
          <div>90-Day Warranty</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
