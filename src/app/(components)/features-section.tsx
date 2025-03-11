"use client"

import React from "react";
import {
  MessageCircleIcon,
  BrainIcon,
  BarChartIcon,
  GlobeIcon,
  ShieldIcon,
  ZapIcon,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: MessageCircleIcon,
      title: "Natural Conversations",
      description:
        "Our AI understands context and nuance, creating human-like conversations that feel natural and engaging.",
    },
    {
      icon: BrainIcon,
      title: "Continuous Learning",
      description:
        "The more interactions it has, the smarter it gets. Our AI learns from every conversation to improve responses.",
    },
    {
      icon: BarChartIcon,
      title: "Actionable Insights",
      description:
        "Gain valuable customer insights with detailed analytics and sentiment analysis from every interaction.",
    },
    {
      icon: GlobeIcon,
      title: "Multilingual Support",
      description:
        "Break language barriers with support for 50+ languages, allowing you to serve customers globally.",
    },
    {
      icon: ShieldIcon,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and compliance with GDPR, HIPAA, and other regulations keep your data safe.",
    },
    {
      icon: ZapIcon,
      title: "Seamless Integration",
      description:
        "Easily integrate with your existing tools like Slack, Zendesk, Salesforce, and more through our API.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 relative">
      {/* Background elements */}
      <div
        className="absolute top-1/4 right-0 w-1/4 h-1/4 bg-blue-500/10 rounded-full blur-3xl"
      ></div>
      <div
        className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-purple-500/10 rounded-full blur-3xl"
      ></div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Our AI chatbot combines cutting-edge technology with intuitive
            design to deliver exceptional customer experiences.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              id={`swbtil_${index}`}
            >
              <div
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4"
                id={`uq4d7s_${index}`}
              >
                <feature.icon
                  className="text-white"
                  size={24}
                  id={`3mm3bz_${index}`}
                />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                id={`nfm77t_${index}`}
              >
                {feature.title}
              </h3>
              <p className="text-blue-100/70" id={`i0xgeo_${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div
            className="inline-block bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-white/10 rounded-xl p-2 backdrop-blur-sm"
          >
            <span className="text-blue-100/80 px-4">
              And many more features to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
