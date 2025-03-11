"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

export function PricingPreview() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses just getting started with AI",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI training capabilities",
        "Email support",
        "Website integration",
        "Basic analytics",
      ],

      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses with moderate support needs",
      features: [
        "Up to 5,000 conversations/month",
        "Advanced AI training",
        "Priority email & chat support",
        "Website & app integration",
        "Advanced analytics & reporting",
        "Custom chatbot personality",
        "Knowledge base integration",
      ],

      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description:
        "Tailored solutions for large organizations with complex needs",
      features: [
        "Unlimited conversations",
        "Dedicated AI training team",
        "24/7 priority support",
        "Full API access",
        "Custom integrations",
        "Advanced security features",
        "Dedicated account manager",
        "On-premise deployment options",
      ],

      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 relative">
      {/* Background elements */}
      <div
        className="absolute top-1/3 right-1/4 w-1/5 h-1/5 bg-blue-500/10 rounded-full blur-3xl"
      ></div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`
 relative bg-white/5 backdrop-blur-sm border-white/10 
 ${plan.popular ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : ""}
 `}
              id={`bytnxg_${index}`}
            >
              {plan.popular && (
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  id={`w3supa_${index}`}
                >
                  <span
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full"
                    id={`d921pq_${index}`}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader id={`bzjkdw_${index}`}>
                <CardTitle className="text-center" id={`3qf1p2_${index}`}>
                  <h3
                    className="text-xl font-bold text-white"
                    id={`nwqhqp_${index}`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-4" id={`6zijjp_${index}`}>
                    <span
                      className="text-4xl font-bold text-white"
                      id={`s55bet_${index}`}
                    >
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span
                        className="text-blue-100/70 ml-2"
                        id={`shekaw_${index}`}
                      >
                        /month
                      </span>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent id={`rkjqe2_${index}`}>
                <p
                  className="text-center text-blue-100/70 mb-6"
                  id={`irofkg_${index}`}
                >
                  {plan.description}
                </p>
                <ul className="space-y-3" id={`36myu6_${index}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start" id={`ovz0an_${i}`}>
                      <CheckIcon
                        className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5"
                        id={`g5w8qm_${i}`}
                      />
                      <span className="text-blue-100/80" id={`mgadyz_${i}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter id={`bbmtlj_${index}`}>
                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" : ""}`}
                  variant={plan.buttonVariant as "outline" | "default"}
                  id={`ytytsy_${index}`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-100/70 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div
            className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
          >
            <span className="text-blue-100">
              Need a custom solution?
            </span>
            <Button variant="link" className="text-blue-400 ml-2">
              Contact our sales team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
