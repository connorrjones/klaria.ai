"use client"

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "How does the AI chatbot work?",
      answer:
        "Our AI chatbot uses natural language processing (NLP) and machine learning to understand and respond to customer inquiries. It learns from each interaction to improve its responses over time. The chatbot can be trained on your specific business knowledge, FAQs, and product information to provide accurate and helpful responses.",
    },
    {
      question: "Can I customize the chatbot to match my brand?",
      answer:
        "Yes, you can fully customize the chatbot's appearance, personality, and responses to match your brand identity. You can change colors, add your logo, customize the chat interface, and define the tone and style of responses to ensure a consistent brand experience.",
    },
    {
      question: "What languages does the chatbot support?",
      answer:
        "Our AI chatbot supports over 50 languages, including English, Spanish, French, German, Chinese, Japanese, Arabic, and many more. This allows you to provide support to customers around the world in their preferred language.",
    },
    {
      question: "How does the chatbot integrate with my existing systems?",
      answer:
        "NexusAI offers seamless integration with popular business tools and platforms through our API and pre-built integrations. We support integration with CRM systems (like Salesforce, HubSpot), help desk software (like Zendesk, Intercom), e-commerce platforms (like Shopify, WooCommerce), and many more.",
    },
    {
      question: "Is my data secure with NexusAI?",
      answer:
        "Yes, we take data security very seriously. NexusAI employs bank-level encryption for all data, both in transit and at rest. We are compliant with GDPR, HIPAA, and other relevant regulations. We also offer data residency options for businesses with specific geographic requirements.",
    },
    {
      question: "What happens when the chatbot can't answer a question?",
      answer:
        "When the AI encounters a question it can't confidently answer, it can seamlessly transfer the conversation to a human agent. You can set up custom escalation rules based on specific triggers, ensuring that complex issues are always handled appropriately.",
    },
    {
      question: "How long does it take to set up the chatbot?",
      answer:
        "Basic setup can be completed in as little as 15 minutes using our no-code integration options. For more customized implementations with training on your specific business knowledge, the process typically takes 1-3 days, depending on the complexity and amount of training data.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 14-day free trial on all our plans with no credit card required. This gives you the opportunity to experience the full capabilities of NexusAI and see the impact it can have on your business before making a commitment.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 relative">
      {/* Background elements */}
      <div
        className="absolute bottom-1/3 left-1/4 w-1/5 h-1/5 bg-purple-500/10 rounded-full blur-3xl"
      ></div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Everything you need to know about NexusAI
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
                id={`z5xat9_${index}`}
              >
                <AccordionTrigger
                  className="px-6 py-4 text-white hover:text-blue-400 hover:no-underline"
                  id={`lzvz6a_${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 pb-4 text-blue-100/80"
                  id={`oawf0w_${index}`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-100/80 mb-4">
            Still have questions?
          </p>
          <div
            className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
          >
            <span className="text-blue-100">
              Our support team is here to help
            </span>
            <button
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
