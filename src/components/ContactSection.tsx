"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
    description: "Call us anytime",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@hellosparkle.com",
    href: "mailto:hello@hellosparkle.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Clean Street, Suite 100",
    href: "https://maps.google.com/?q=123+Clean+Street",
    description: "Springfield, IL 62701",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 7AM - 7PM",
    href: null,
    description: "Sunday: By appointment",
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-28 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready for a sparkling clean space? Reach out to us through any of
            the channels below. We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => (
              <Card
                key={item.title}
                className={`border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-primary hover:underline font-medium block mb-1"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium mb-1">
                      {item.value}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map & Social */}
          <div className="space-y-6">
            {/* Map Embed */}
            <Card className="overflow-hidden border-border">
              <div className="relative h-[300px] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1234567890123!2d-89.6501481!3d39.7817213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjIiTiA4OcKwMzknMDAuNSJX!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hello Sparkle Location"
                  className="absolute inset-0"
                />
              </div>
            </Card>

            {/* Social Links */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Follow Us on Social Media
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      asChild
                      className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="border-primary bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-white/80 mb-4">
                  Call us today for a free quote and experience the Hello
                  Sparkle difference!
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <a href="tel:+15551234567">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: (555) 123-4567
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
