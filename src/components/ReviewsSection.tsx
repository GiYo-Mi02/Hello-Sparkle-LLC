"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jennifer Martinez",
    role: "Homeowner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
    rating: 5,
    text: "Hello Sparkle transformed my home! Their attention to detail is incredible. Every corner was spotless, and they even organized my pantry. I've been using their services for 2 years now and couldn't be happier.",
  },
  {
    id: 2,
    name: "Robert Williams",
    role: "Business Owner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    rating: 5,
    text: "As a restaurant owner, cleanliness is paramount. Hello Sparkle exceeds our expectations every time. Their commercial cleaning service is thorough, professional, and always on schedule.",
  },
  {
    id: 3,
    name: "Amanda Foster",
    role: "Property Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
    rating: 5,
    text: "I manage multiple rental properties and Hello Sparkle is my go-to for move-out cleanings. They make apartments look brand new. Highly recommend their deep cleaning services!",
  },
  {
    id: 4,
    name: "Thomas Anderson",
    role: "Office Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
    rating: 5,
    text: "Our office has never looked better. The team is professional, friendly, and incredibly efficient. They work around our schedule and the results speak for themselves.",
  },
  {
    id: 5,
    name: "Lisa Chen",
    role: "Homeowner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    rating: 5,
    text: "I was skeptical at first, but after one cleaning session, I was sold. They use eco-friendly products which is important for my family. The house smells fresh without harsh chemicals.",
  },
  {
    id: 6,
    name: "Marcus Johnson",
    role: "Real Estate Agent",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    rating: 5,
    text: "I recommend Hello Sparkle to all my clients. Their pre-sale cleaning service helps homes show beautifully. They're reliable, affordable, and deliver exceptional results.",
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleReviews = reviews.slice(
    currentIndex * reviewsPerPage,
    (currentIndex + 1) * reviewsPerPage
  );

  return (
    <section ref={sectionRef} id="reviews" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our cleaning services.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <Card
                key={review.id}
                className={`border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{review.text}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-accent">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {review.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
