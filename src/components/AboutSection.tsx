"use client";

import { Award, Users, Clock, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: Heart, value: "100%", label: "Satisfaction Rate" },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "With over 15 years in the cleaning industry, Sarah founded Hello Sparkle with a vision of exceptional service.",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    bio: "Michael ensures every cleaning project runs smoothly, coordinating our talented team of professionals.",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Supervisor",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    bio: "Emily leads our cleaning crews with attention to detail and a commitment to quality in every job.",
  },
  {
    name: "David Thompson",
    role: "Customer Relations",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    bio: "David is dedicated to ensuring every client receives personalized attention and outstanding service.",
  },
];

export default function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-20 md:py-28 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Our team at work"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl" />
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Cleaning Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hello Sparkle has been providing exceptional cleaning services
              since 2014. We believe that a clean space is essential for health,
              productivity, and peace of mind.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of trained professionals uses eco-friendly products and
              proven techniques to deliver spotless results every time. We treat
              every space as if it were our own, ensuring attention to detail
              that sets us apart.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 bg-white rounded-xl shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-4">
            Meet the People Behind the Sparkle
          </h3>
          <p className="text-muted-foreground">
            Our dedicated team brings expertise, passion, and attention to
            detail to every cleaning project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`bg-white rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-accent">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                {member.name}
              </h4>
              <p className="text-primary text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
