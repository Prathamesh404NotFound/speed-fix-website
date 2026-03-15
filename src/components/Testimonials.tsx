import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Maria G.",
    text: "Cracked my iPhone screen on the subway — walked into Speed Fix, and they had it done in 45 minutes. Incredible service.",
    rating: 5,
  },
  {
    name: "James T.",
    text: "My MacBook wouldn't charge. They diagnosed a logic board issue and fixed it the same day. No other shop even wanted to try.",
    rating: 5,
  },
  {
    name: "Priya S.",
    text: "Water damage on my Samsung. They recovered all my photos and fixed the phone. Honest pricing, no surprises.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "Best repair shop in the LES. Fast, fair prices, and the warranty gives me peace of mind. Highly recommend.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container-narrow">
        <p className="label-sm mb-3">Reviews</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-12">
          Trusted by New Yorkers
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
              className="rounded-2xl p-6 shadow-soft bg-card transition-shadow duration-200 hover:shadow-hover"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FiStar key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-card-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
