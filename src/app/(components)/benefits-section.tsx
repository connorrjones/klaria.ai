"use client"

import React from "react";
import {
  ClockIcon,
  TrendingUpIcon,
  UsersIcon,
  DollarSignIcon,
  BrainIcon,
  ShieldIcon,
  ScaleIcon,
  TagIcon,
  CheckCircleIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, Line, LineChart } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

export function BenefitsSection() {
  const benefits = [
    {
      icon: ClockIcon,
      title: "24/7 Availability",
      description:
        "Never miss a customer inquiry with round-the-clock automated responses.",
      stat: "100%",
      statLabel: "Uptime",
    },
    {
      icon: TrendingUpIcon,
      title: "Increased Efficiency",
      description:
        "Automate up to 80% of routine inquiries, freeing your team for complex tasks.",
      stat: "80%",
      statLabel: "Automation",
    },
    {
      icon: UsersIcon,
      title: "Enhanced Experience",
      description:
        "Provide instant, personalized responses that boost customer satisfaction.",
      stat: "92%",
      statLabel: "Satisfaction",
    },
    {
      icon: DollarSignIcon,
      title: "Cost Reduction",
      description:
        "Reduce support costs by up to 60% while improving service quality.",
      stat: "60%",
      statLabel: "Cost Savings",
    },
    {
      icon: BrainIcon,
      title: "Valuable Insights",
      description:
        "Gain actionable data from customer interactions to improve products and services.",
      stat: "3x",
      statLabel: "More Data",
    },
    {
      icon: ShieldIcon,
      title: "Scalable Solution",
      description:
        "Handle surges in inquiries without adding staff or compromising quality.",
      stat: "∞",
      statLabel: "Scalability",
    },
  ];

  // Sample data for charts
  const responseTimeData = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 28 },
    { name: "Mar", value: 25 },
    { name: "Apr", value: 22 },
    { name: "May", value: 18 },
    { name: "Jun", value: 15 },
    { name: "Jul", value: 12 },
    { name: "Aug", value: 10 },
  ];

  const satisfactionData = [
    { name: "Jan", value: 75 },
    { name: "Feb", value: 78 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 82 },
    { name: "May", value: 85 },
    { name: "Jun", value: 88 },
    { name: "Jul", value: 90 },
    { name: "Aug", value: 92 },
  ];

  const comparisonFeatures = [
    {
      feature: "Monthly Base Price",
      nexusAI: "$29",
      intercom: "$99",
      highlight: true,
    },
    {
      feature: "Per Ticket Closing Fee",
      nexusAI: "FREE",
      intercom: "99¢",
      highlight: true,
    },
    {
      feature: "Free Messages per Month",
      nexusAI: "100",
      intercom: "0",
      highlight: true,
    },
    {
      feature: "AI-Powered Responses",
      nexusAI: "✓",
      intercom: "✓",
      highlight: false,
    },
    {
      feature: "Chatbot Customization",
      nexusAI: "✓",
      intercom: "✓",
      highlight: false,
    },
    {
      feature: "Analytics Dashboard",
      nexusAI: "✓",
      intercom: "✓",
      highlight: false,
    },
    {
      feature: "Multi-Channel Support",
      nexusAI: "✓",
      intercom: "✓",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 relative">
      {/* Background elements */}
      <div
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"
      ></div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Why Businesses Choose NexusAI
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Our AI chatbot delivers measurable results that impact your bottom
            line
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
              id={`bcgqjf_${index}`}
            >
              <CardContent className="p-6" id={`igc2yw_${index}`}>
                <div className="flex items-start" id={`jzfshw_${index}`}>
                  <div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-4"
                    id={`z00368_${index}`}
                  >
                    <benefit.icon
                      className="text-white"
                      size={24}
                      id={`iel3b7_${index}`}
                    />
                  </div>
                  <div id={`xgqxxm_${index}`}>
                    <h3
                      className="text-xl font-semibold mb-2 text-white"
                      id={`nznmzh_${index}`}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-blue-100/70 mb-4" id={`qultb6_${index}`}>
                      {benefit.description}
                    </p>
                    <div className="flex items-baseline" id={`2zz7u3_${index}`}>
                      <span
                        className="text-2xl font-bold text-blue-400"
                        id={`3pdwww_${index}`}
                      >
                        {benefit.stat}
                      </span>
                      <span
                        className="ml-2 text-blue-100/70"
                        id={`x6ay4k_${index}`}
                      >
                        {benefit.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Average Response Time
            </h3>
            <p className="text-blue-100/70 mb-6">
              See how NexusAI reduces customer wait times
            </p>

            <div className="h-64">
              <ChartContainer
                config={{}}
                className="aspect-[none] h-full"
              >
                <LineChart data={responseTimeData}>
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                  />

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    dot={false}
                    radius={4}
                  />
                </LineChart>
              </ChartContainer>
            </div>
            <div className="mt-4 text-center text-blue-100/70">
              <span className="text-blue-400 font-semibold">
                67% decrease
              </span>{" "}
              in response time over 8 months
            </div>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Customer Satisfaction
            </h3>
            <p className="text-blue-100/70 mb-6">
              Improved satisfaction scores with AI assistance
            </p>

            <div className="h-64">
              <ChartContainer
                config={{}}
                className="aspect-[none] h-full"
              >
                <BarChart data={satisfactionData}>
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                  />

                  <Bar
                    dataKey="value"
                    fill="hsl(var(--chart-2))"
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="mt-4 text-center text-blue-100/70">
              <span className="text-blue-400 font-semibold">
                17% increase
              </span>{" "}
              in customer satisfaction scores
            </div>
          </div>
        </div>
      </div>

      {/* NexusAI vs Competitors Section */}
      <div className="container mx-auto mt-24">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            NexusAI vs Competitors
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Get premium features at a fraction of the cost
          </p>
        </div>

        <div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Why Pay More for the Same Features?
              </h3>
              <p className="text-lg text-blue-100/80 mb-8">
                NexusAI delivers all the premium features of Intercom and other
                enterprise chatbots at a fraction of the cost. We believe in
                transparent pricing with no hidden fees.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div
                    className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3 shrink-0"
                  >
                    <TagIcon className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4
                      className="text-white font-semibold text-lg"
                    >
                      Affordable Pricing
                    </h4>
                    <p className="text-blue-100/70">
                      Starting at just $29/month compared to Intercom&apos;s
                      $99/month
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3 shrink-0"
                  >
                    <CheckCircleIcon
                      className="h-5 w-5 text-green-400"
                    />
                  </div>
                  <div>
                    <h4
                      className="text-white font-semibold text-lg"
                    >
                      No Per-Ticket Fees
                    </h4>
                    <p className="text-blue-100/70">
                      While Intercom charges 99¢ per closed ticket, we close
                      tickets for free
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3 shrink-0"
                  >
                    <ScaleIcon className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4
                      className="text-white font-semibold text-lg"
                    >
                      Free Messages Included
                    </h4>
                    <p className="text-blue-100/70">
                      Get 100 free messages every month before any charges apply
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl text-lg"
              >
                Start Saving Today
              </Button>
            </div>

            <div
              className="overflow-hidden rounded-xl border border-white/10"
            >
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/10">
                    <th className="p-4 text-white">
                      Feature
                    </th>
                    <th className="p-4 text-white text-center">
                      NexusAI
                    </th>
                    <th className="p-4 text-white text-center">
                      Intercom
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-t border-white/10 ${
                        item.highlight ? "bg-blue-500/10" : ""
                      }`}
                      id={`a91oi7_${index}`}
                    >
                      <td className="p-4 text-blue-100" id={`bmtpyo_${index}`}>
                        {item.feature}
                      </td>
                      <td
                        className={`p-4 text-center ${
                          item.highlight
                            ? "text-green-400 font-bold"
                            : "text-blue-100"
                        }`}
                        id={`777hxa_${index}`}
                      >
                        {item.nexusAI}
                      </td>
                      <td
                        className={`p-4 text-center ${
                          item.highlight
                            ? "text-red-400 font-bold"
                            : "text-blue-100"
                        }`}
                        id={`o2fmul_${index}`}
                      >
                        {item.intercom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
