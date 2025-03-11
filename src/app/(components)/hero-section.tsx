"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background gradient elements */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
      >
        <div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-3xl"
        ></div>
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl"
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 text-center lg:text-left"
              >
                AI-Powered Conversations That Convert
              </h1>
              <p
                className="mt-6 text-lg md:text-xl text-blue-100/80 max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
              >
                Transform your customer support with our intelligent chatbot.
                Automate responses, gather insights, and delight your customers
                24/7.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl text-lg"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-xl text-lg bg-white/5"
              >
                <span>See Demo</span>
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div
              className="flex items-center space-x-4 text-sm text-blue-100/60 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i, index) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-blue-950 overflow-hidden"
                    id={`bbnixp_${index}`}
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                      id={`6r6z41_${index}`}
                    />
                  </div>
                ))}
              </div>
              <div>
                <span className="font-semibold text-blue-100">
                  500+
                </span>{" "}
                companies already using NexusAI
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"
            ></div>
            <div
              className="relative bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
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
                    How can NexusAI help my business?
                  </p>
                </div>

                <div
                  className="bg-blue-600/30 rounded-lg p-4 max-w-[80%] ml-auto"
                >
                  <p className="text-white">
                    I can help your business by automating customer support,
                    gathering insights from conversations, and being available
                    24/7 to answer questions. This reduces response times and
                    increases customer satisfaction.
                  </p>
                </div>

                <div
                  className="bg-white/10 rounded-lg p-4 max-w-[80%]"
                >
                  <p className="text-white">
                    Can you integrate with our existing systems?
                  </p>
                </div>

                <div
                  className="bg-blue-600/30 rounded-lg p-4 max-w-[80%] ml-auto"
                >
                  <p className="text-white">
                    Yes! I can integrate seamlessly with your CRM, help desk,
                    and other business tools through our API. This allows for a
                    unified workflow and consistent customer experience.
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
    </section>
  );
}
