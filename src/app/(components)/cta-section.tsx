"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

export function CtaSection() {
  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Cancel anytime",
    "24/7 support",
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl"
        >
          <div
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl"
          ></div>
          <div
            className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl"
          ></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div
          className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
              >
                Ready to Transform Your Customer Experience?
              </h2>
              <p className="text-lg text-blue-100/80 mb-8">
                Join thousands of businesses using NexusAI to automate support,
                increase satisfaction, and drive growth.
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center"
                    id={`poj2ca_${index}`}
                  >
                    <div
                      className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3"
                      id={`0pmcka_${index}`}
                    >
                      <CheckIcon
                        className="h-3 w-3 text-blue-400"
                        id={`62zeta_${index}`}
                      />
                    </div>
                    <span className="text-blue-100" id={`h2x6il_${index}`}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl text-lg"
                >
                  Get Started Free
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-xl text-lg"
                >
                  <span>Schedule Demo</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"
              ></div>
              <div
                className="relative bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div
                  className="flex items-center justify-between mb-6"
                >
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
                    >
                      <span className="text-white font-bold">
                        AI
                      </span>
                    </div>
                    <h3 className="ml-3 text-white font-semibold">
                      NexusAI Assistant
                    </h3>
                  </div>
                  <div
                    className="w-3 h-3 rounded-full bg-green-500"
                  ></div>
                </div>

                <div className="space-y-4">
                  <div
                    className="bg-white/10 rounded-lg p-4 max-w-[80%]"
                  >
                    <p className="text-white">
                      I'd like to learn more about NexusAI for my business.
                    </p>
                  </div>

                  <div
                    className="bg-blue-600/30 rounded-lg p-4 max-w-[80%] ml-auto"
                  >
                    <p className="text-white">
                      I'd be happy to help! NexusAI can automate up to 80% of
                      your customer inquiries, provide 24/7 support, and
                      integrate with your existing systems. Would you like to
                      start a free trial or schedule a demo?
                    </p>
                  </div>

                  <div
                    className="bg-white/10 rounded-lg p-4 max-w-[80%]"
                  >
                    <p className="text-white">
                      I'd like to start a free trial.
                    </p>
                  </div>

                  <div
                    className="bg-blue-600/30 rounded-lg p-4 max-w-[80%] ml-auto"
                  >
                    <p className="text-white">
                      Great choice! I'll guide you through the setup process. It
                      only takes a few minutes, and you'll be able to experience
                      the full capabilities of NexusAI for 14 days, no credit
                      card required.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <Button
                    className="ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 text-center text-blue-100/60">
          <div className="mb-6">
            <div className="flex items-center justify-center">
              <div
                className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
              >
                <span className="text-white font-bold">
                  AI
                </span>
              </div>
              <h1 className="ml-2 text-white font-bold">
                NexusAI
              </h1>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
            <a href="#" className="hover:text-blue-400">
              Features
            </a>
            <a href="#" className="hover:text-blue-400">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-400">
              About
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p>© 2023 NexusAI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
