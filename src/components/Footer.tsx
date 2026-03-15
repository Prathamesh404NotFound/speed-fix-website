const Footer = () => {
  return (
    <footer className="bg-foreground text-background/60 py-12 px-4 md:px-8">
      <div className="container-narrow">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-background mb-2">
              Speed Fix <span className="text-primary">Mobile</span>
            </p>
            <p className="text-sm">
              Same-day phone & electronics repair in the heart of New York's Lower East Side.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-background mb-2">Quick Links</p>
            <div className="space-y-1 text-sm">
              <a href="#services" className="block hover:text-background transition-colors">Services</a>
              <a href="#how-it-works" className="block hover:text-background transition-colors">How It Works</a>
              <a href="#reviews" className="block hover:text-background transition-colors">Reviews</a>
              <a href="#contact" className="block hover:text-background transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-background mb-2">Contact</p>
            <div className="space-y-1 text-sm">
              <p>94 Hester St, New York, NY 10002</p>
              <p>Mon–Sat: 10 AM – 5:30 PM</p>
              <a href="tel:+12125550199" className="block hover:text-background transition-colors">(212) 555-0199</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 text-xs text-background/40" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          © {new Date().getFullYear()} Speed Fix Mobile Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
