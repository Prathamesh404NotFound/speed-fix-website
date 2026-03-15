import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import screenImg from "@/assets/service-screen.jpg";
import batteryImg from "@/assets/service-battery.jpg";
import waterImg from "@/assets/service-water.jpg";
import motherboardImg from "@/assets/service-motherboard.jpg";
import hdmiImg from "@/assets/service-hdmi.jpg";
import dataImg from "@/assets/service-data.jpg";

const services = [
  {
    title: "Screen Repair",
    description: "Cracked or unresponsive screen? We replace it with genuine parts in under 2 hours.",
    price: "From $79",
    time: "1–2 hours",
    image: screenImg,
    alt: "Cracked phone screen next to a brand-new replacement on a workbench",
  },
  {
    title: "Battery Replacement",
    description: "Restore your device's battery life with a certified replacement cell.",
    price: "From $49",
    time: "30–60 min",
    image: batteryImg,
    alt: "Technician removing a battery from a smartphone on an anti-static mat",
  },
  {
    title: "Water Damage Repair",
    description: "Advanced ultrasonic cleaning and micro-soldering to recover water-damaged devices.",
    price: "From $99",
    time: "1–3 hours",
    image: waterImg,
    alt: "Technician examining water-damaged phone board under microscope",
  },
  {
    title: "Motherboard Repair",
    description: "Component-level soldering for logic board issues — no data loss, no board swaps.",
    price: "From $149",
    time: "2–4 hours",
    image: motherboardImg,
    alt: "Motherboard on workbench with soldering iron and magnifier",
  },
  {
    title: "HDMI & Port Repair",
    description: "Laptop and console HDMI, USB-C, and charging port replacements.",
    price: "From $89",
    time: "1–3 hours",
    image: hdmiImg,
    alt: "Technician testing HDMI port on an open laptop chassis",
  },
  {
    title: "Data Recovery",
    description: "Recover photos, messages, and files from damaged or non-booting devices.",
    price: "From $129",
    time: "24–48 hours",
    image: dataImg,
    alt: "Data recovery equipment with hard drive platters on workbench",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0, 0, 1] } },
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        <p className="label-sm mb-3">Our Services</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-12">
          Expert repairs for every device
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group rounded-2xl overflow-hidden shadow-soft transition-shadow duration-200 hover:shadow-hover bg-card"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-xs font-medium text-muted-foreground">
                    <span className="tabular-nums">{service.price}</span>
                    <span>{service.time}</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Book <FiArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
