import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { FiPhone, FiMapPin, FiClock, FiMessageCircle, FiSend, FiCalendar, FiChevronDown, FiUpload, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const DEVICE_OPTIONS = [
  "iPhone 16 / 16 Pro / 16 Pro Max",
  "iPhone 15 / 15 Pro / 15 Pro Max",
  "iPhone 14 / 14 Pro / 14 Pro Max",
  "iPhone 13 / 13 Pro / 13 Pro Max",
  "iPhone 12 or older",
  "Samsung Galaxy S24 / S24+/ S24 Ultra",
  "Samsung Galaxy S23 / S22 / older",
  "Google Pixel",
  "iPad / Tablet",
  "MacBook / Laptop",
  "Gaming Console",
  "Other",
];

const SERVICE_OPTIONS = [
  "Screen Repair",
  "Battery Replacement",
  "Water Damage Repair",
  "Motherboard Repair",
  "HDMI / Port Repair",
  "Data Recovery",
  "Diagnostic (Free)",
  "Other",
];

const TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

const URGENCY_OPTIONS = [
  { label: "Standard", desc: "Next available slot", color: "bg-muted text-foreground" },
  { label: "Same-Day", desc: "Priority queue (+$20)", color: "bg-primary/10 text-primary" },
  { label: "Express", desc: "1–3 hour rush (+$40)", color: "bg-destructive/10 text-destructive" },
];

const inputClass = "w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    device: "",
    service: "",
    urgency: "Standard",
    problem: "",
    pickup: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).slice(0, 3 - photos.length);
      setPhotos((prev) => [...prev, ...newFiles].slice(0, 3));
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const canAdvance = step === 1
    ? form.name && form.phone && form.device && form.service
    : step === 2
    ? date && timeSlot
    : true;

  const totalSteps = 3;

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
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FiSend className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Booking Confirmed!</h3>
                <p className="text-sm text-muted-foreground max-w-xs mb-4">
                  {date && timeSlot
                    ? `We'll see you on ${format(date, "EEEE, MMMM d")} at ${timeSlot}.`
                    : "We'll get back to you shortly."}
                </p>
                <div className="rounded-xl bg-muted p-4 text-left text-sm space-y-1 w-full max-w-xs">
                  <p><span className="font-medium text-foreground">Device:</span> <span className="text-muted-foreground">{form.device}</span></p>
                  <p><span className="font-medium text-foreground">Service:</span> <span className="text-muted-foreground">{form.service}</span></p>
                  <p><span className="font-medium text-foreground">Priority:</span> <span className="text-muted-foreground">{form.urgency}</span></p>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  For faster service, call or WhatsApp us.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex-1 flex items-center gap-2">
                      <div
                        className={cn(
                          "h-1.5 rounded-full flex-1 transition-colors duration-300",
                          s <= step ? "bg-primary" : "bg-muted"
                        )}
                      />
                    </div>
                  ))}
                  <span className="text-xs font-medium text-muted-foreground ml-2">
                    {step}/{totalSteps}
                  </span>
                </div>

                {/* Step 1: Contact + Device */}
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in-up">
                    <p className="text-sm font-semibold text-foreground">Your details & device</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1">Name *</label>
                        <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-muted-foreground mb-1">Phone *</label>
                        <input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="(212) 555-0199" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1">Email</label>
                      <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@email.com (optional)" />
                    </div>
                    <div>
                      <label htmlFor="device" className="block text-xs font-medium text-muted-foreground mb-1">Device *</label>
                      <div className="relative">
                        <select
                          id="device"
                          required
                          value={form.device}
                          onChange={(e) => setForm({ ...form, device: e.target.value })}
                          className={cn(inputClass, "appearance-none pr-10")}
                        >
                          <option value="">Select your device</option>
                          {DEVICE_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                        </select>
                        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-medium text-muted-foreground mb-1">Service needed *</label>
                      <div className="relative">
                        <select
                          id="service"
                          required
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className={cn(inputClass, "appearance-none pr-10")}
                        >
                          <option value="">Select a service</option>
                          {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Date, Time & Urgency */}
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in-up">
                    <p className="text-sm font-semibold text-foreground">Choose date & time</p>

                    {/* Date picker */}
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">Preferred date *</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className={cn(inputClass, "flex items-center gap-2 text-left", !date && "text-muted-foreground")}
                          >
                            <FiCalendar className="w-4 h-4 flex-shrink-0" />
                            {date ? format(date, "EEEE, MMMM d, yyyy") : "Pick a date"}
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(d) => d < new Date() || d.getDay() === 0}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Time slots */}
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2">Preferred time *</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTimeSlot(slot)}
                            className={cn(
                              "rounded-lg px-3 py-2.5 text-xs font-medium transition-all duration-200",
                              timeSlot === slot
                                ? "bg-primary text-primary-foreground shadow-soft"
                                : "bg-muted text-foreground hover:bg-muted/80"
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Urgency */}
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2">Priority level</label>
                      <div className="grid gap-2">
                        {URGENCY_OPTIONS.map((opt) => (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => setForm({ ...form, urgency: opt.label })}
                            className={cn(
                              "flex items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-200",
                              form.urgency === opt.label
                                ? "ring-2 ring-primary bg-primary/5"
                                : "bg-muted hover:bg-muted/80"
                            )}
                          >
                            <div>
                              <p className="text-sm font-medium text-foreground">{opt.label}</p>
                              <p className="text-xs text-muted-foreground">{opt.desc}</p>
                            </div>
                            <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center", form.urgency === opt.label ? "border-primary" : "border-muted-foreground/30")}>
                              {form.urgency === opt.label && <div className="w-2 h-2 rounded-full bg-primary" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Details & Photos */}
                {step === 3 && (
                  <div className="space-y-4 animate-fade-in-up">
                    <p className="text-sm font-semibold text-foreground">Additional details</p>
                    <div>
                      <label htmlFor="problem" className="block text-xs font-medium text-muted-foreground mb-1">Describe the problem</label>
                      <textarea
                        id="problem"
                        rows={3}
                        value={form.problem}
                        onChange={(e) => setForm({ ...form, problem: e.target.value })}
                        className={cn(inputClass, "resize-none")}
                        placeholder="Cracked screen, battery draining fast, water damage…"
                      />
                    </div>

                    {/* Photo upload */}
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2">Upload photos (optional, max 3)</label>
                      <div className="flex flex-wrap gap-2">
                        {photos.map((file, i) => (
                          <div key={i} className="relative w-20 h-20 rounded-xl overflow-hidden bg-muted">
                            <img src={URL.createObjectURL(file)} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
                            <button type="button" onClick={() => removePhoto(i)} className="absolute top-1 right-1 w-5 h-5 rounded-full bg-foreground/80 flex items-center justify-center">
                              <FiX className="w-3 h-3 text-background" />
                            </button>
                          </div>
                        ))}
                        {photos.length < 3 && (
                          <label className="w-20 h-20 rounded-xl bg-muted flex flex-col items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors">
                            <FiUpload className="w-4 h-4 text-muted-foreground mb-1" />
                            <span className="text-[10px] text-muted-foreground">Add</span>
                            <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                          </label>
                        )}
                      </div>
                    </div>

                    {/* Pickup option */}
                    <label className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.pickup}
                        onChange={(e) => setForm({ ...form, pickup: e.target.checked })}
                        className="w-4 h-4 rounded accent-primary"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">Request pickup / drop-off</p>
                        <p className="text-xs text-muted-foreground">We'll arrange device collection in Manhattan</p>
                      </div>
                    </label>

                    {/* Summary */}
                    <div className="rounded-xl bg-muted p-4 text-sm space-y-1">
                      <p className="font-medium text-foreground mb-2">Booking Summary</p>
                      <p><span className="text-muted-foreground">Device:</span> <span className="text-foreground">{form.device}</span></p>
                      <p><span className="text-muted-foreground">Service:</span> <span className="text-foreground">{form.service}</span></p>
                      <p><span className="text-muted-foreground">Date:</span> <span className="text-foreground">{date ? format(date, "MMM d, yyyy") : "—"}</span></p>
                      <p><span className="text-muted-foreground">Time:</span> <span className="text-foreground">{timeSlot || "—"}</span></p>
                      <p><span className="text-muted-foreground">Priority:</span> <span className="text-foreground">{form.urgency}</span></p>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex gap-3 mt-6">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex-1 rounded-xl bg-muted px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
                    >
                      Back
                    </button>
                  )}
                  {step < totalSteps ? (
                    <button
                      type="button"
                      disabled={!canAdvance}
                      onClick={() => setStep(step + 1)}
                      className={cn(
                        "flex-1 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-px active:scale-[0.98]",
                        canAdvance
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      )}
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex-1 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
                    >
                      Confirm Repair Booking
                    </button>
                  )}
                </div>
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
