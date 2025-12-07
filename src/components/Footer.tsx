import Image from "next/image";

const footerLinks = {
  services: [
    { name: "Residential Cleaning", href: "#services" },
    { name: "Commercial Cleaning", href: "#services" },
    { name: "Deep Cleaning", href: "#services" },
    { name: "Window Cleaning", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative overflow-hidden rounded-full">
                <Image
                  src="/logo.jpg"
                  alt="Hello Sparkle Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl">
                Hello <span className="text-primary">Sparkle</span>
              </span>
            </a>
            <p className="text-white/70 max-w-md mb-6 leading-relaxed">
              Mess? We Say Less! Professional cleaning services for homes and businesses. 
              We bring sparkle to every space with eco-friendly products and exceptional
              attention to detail.
            </p>
            <p className="text-white/50 text-sm">
              Licensed & Insured | 100% Satisfaction
              Guaranteed
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hello Sparkle. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
