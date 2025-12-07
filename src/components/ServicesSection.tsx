"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Sparkles, Brush, Wind, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Complete home cleaning services including deep cleaning, regular maintenance, and move-in/move-out cleaning.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Professional office and commercial space cleaning to maintain a healthy, productive work environment.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Thorough deep cleaning services that reach every corner, perfect for seasonal refreshes or special occasions.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Dealership Cleaning",
    description:
      "Specialized cleaning services for car dealerships, ensuring showrooms and facilities maintain a professional, pristine appearance.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
  },
  {
    icon: Building2,
    title: "New Construction Cleaning",
    description:
      "Post-construction cleanup services to prepare newly built spaces for occupancy, removing debris and ensuring move-in readiness.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Sanitization Services",
    description:
      "Professional disinfection and sanitization to ensure a safe, germ-free environment for your space.",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80",
  },
];

export default function ServicesSection() {
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
    <section ref={sectionRef} id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Professional Cleaning Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From residential to commercial, we offer comprehensive cleaning
            services tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group overflow-hidden border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
