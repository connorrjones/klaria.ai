"use client"

import React from "react";
import {
  DownloadIcon,
  SettingsIcon,
  ZapIcon,
  BarChartIcon,
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: DownloadIcon,
      title: "1. Quick Setup",
      description:
        "Install our chatbot on your website with a simple code snippet or use our no-code integration with popular platforms.",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: SettingsIcon,
      title: "2. Customize & Train",
      description:
        "Tailor the AI to your business needs by adding your FAQs, product information, and brand voice guidelines.",
      color: "from-indigo-600 to-indigo-400",
    },
    {
      icon: ZapIcon,
      title: "3. Go Live",
      description:
        "Launch your AI assistant and let it handle customer inquiries 24/7, learning and improving with each interaction.",
      color: "from-purple-600 to-purple-400",
    },
    {
      icon: BarChartIcon,
      title: "4. Analyze & Optimize",
      description:
        "Review performance metrics and customer feedback to continuously refine your chatbot's responses and capabilities.",
      color: "from-pink-600 to-pink-400",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 relative">
      {/* Background elements */}
      <div
        className="absolute top-1/3 left-1/4 w-1/5 h-1/5 bg-blue-500/10 rounded-full blur-3xl"
      ></div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            How NexusAI Works
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Get up and running with our AI chatbot in just a few simple steps
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              id={`ety98l_${index}`}
            >
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}
                id={`3159fi_${index}`}
              >
                <step.icon
                  className="text-white"
                  size={24}
                  id={`qajocj_${index}`}
                />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                id={`70qvyy_${index}`}
              >
                {step.title}
              </h3>
              <p className="text-blue-100/70" id={`8run13_${index}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          <div
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/10 rounded-xl p-8 backdrop-blur-sm"
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  See It In Action
                </h3>
                <p className="text-blue-100/80 mb-6">
                  Watch how businesses like yours are using NexusAI to transform
                  their customer support and drive growth.
                </p>
                <button
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300"
                >
                  <span>Watch Demo</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <div
                  className="aspect-video bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg overflow-hidden flex items-center justify-center"
                >
                  <svg
                    className="w-16 h-16 text-white/80"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl -z-10"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
