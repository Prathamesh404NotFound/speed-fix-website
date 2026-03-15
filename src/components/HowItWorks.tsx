import { motion } from "framer-motion";
import { FiSearch, FiTool, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    title: "Diagnose",
    description: "Free diagnostic assessment when you walk in or book online. We identify the issue in minutes.",
  },
  {
    icon: FiTool,
    title: "Repair",
    description: "Expert technicians fix your device with genuine parts — most repairs completed same day.",
  },
  {
    icon: FiCheckCircle,
    title: "Pickup",
    description: "Quality-tested and ready. Pick up in-store or request delivery. 90-day warranty included.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-muted">
      <div className="container-narrow">
        <p className="label-sm mb-3">How It Works</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-12">
          Three steps to a fixed device
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <step.icon className="w-5 h-5" />
              </div>
              <div className="label-sm mb-2">Step {i + 1}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
