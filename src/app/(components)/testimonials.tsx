"use client"

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Customer Support Manager",
      company: "TechFlow Inc.",
      avatar: "https://i.pravatar.cc/150?img=32",
      quote:
        "NexusAI has transformed our customer support operations. We've reduced response times by 70% while handling 3x more inquiries. Our team can now focus on complex issues while the AI handles routine questions.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "E-commerce Director",
      company: "ShopWave",
      avatar: "https://i.pravatar.cc/150?img=11",
      quote:
        "Since implementing NexusAI, our conversion rates have increased by 25%. The chatbot guides customers through the purchase process and answers product questions instantly, reducing cart abandonment.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "CTO",
      company: "HealthPlus",
      avatar: "https://i.pravatar.cc/150?img=20",
      quote:
        "As a healthcare provider, we needed a secure, HIPAA-compliant solution. NexusAI delivered with exceptional security while providing 24/7 support for our patients' non-urgent questions.",
      rating: 4,
    },
  ];

  const clientLogos = [
    {
      name: "TechFlow Inc.",
      logo: "https://github.com/polymet-ai.png",
    },
    {
      name: "ShopWave",
      logo: "https://github.com/polymet-ai.png",
    },
    {
      name: "HealthPlus",
      logo: "https://github.com/polymet-ai.png",
    },
    {
      name: "GlobalFinance",
      logo: "https://github.com/polymet-ai.png",
    },
    {
      name: "EduSmart",
      logo: "https://github.com/polymet-ai.png",
    },
    {
      name: "TravelEase",
      logo: "https://github.com/polymet-ai.png",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 relative">
      {/* Background elements */}
      <div
        className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-blue-500/10 rounded-full blur-3xl"
      ></div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            See what our customers are saying about their experience with
            NexusAI
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
              id={`yax3hf_${index}`}
            >
              <CardContent className="p-6" id={`plolyu_${index}`}>
                <div className="flex items-center mb-4" id={`b0tdg2_${index}`}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-400"}`}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      id={`icmsym_${i}`}
                    />
                  ))}
                </div>
                <p
                  className="text-blue-100/80 mb-6 italic"
                  id={`k2h2oi_${index}`}
                >
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center" id={`ioqyj3_${index}`}>
                  <Avatar className="h-12 w-12 mr-4" id={`cuj15k_${index}`}>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      id={`m4qyvs_${index}`}
                    />

                    <AvatarFallback id={`aqc916_${index}`}>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div id={`jendwn_${index}`}>
                    <h4
                      className="font-semibold text-white"
                      id={`qrf35f_${index}`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-sm text-blue-100/70"
                      id={`fax2yo_${index}`}
                    >
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            Powering Conversations at
          </h3>
          <p className="text-blue-100/70">
            Join 500+ companies already using NexusAI
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              id={`u99ua0_${index}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                id={`3e5t9l_${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
