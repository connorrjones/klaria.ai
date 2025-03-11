&quot;use client&quot;

import React from &quot;react&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { StarIcon } from &quot;lucide-react&quot;;

export function Testimonials() {
  const testimonials = [
    {
      name: &quot;Sarah Johnson&quot;,
      position: &quot;Customer Support Manager&quot;,
      company: &quot;TechFlow Inc.&quot;,
      avatar: &quot;https://i.pravatar.cc/150?img=32&quot;,
      quote:
        &quot;NexusAI has transformed our customer support operations. We've reduced response times by 70% while handling 3x more inquiries. Our team can now focus on complex issues while the AI handles routine questions.&quot;,
      rating: 5,
    },
    {
      name: &quot;Michael Chen&quot;,
      position: &quot;E-commerce Director&quot;,
      company: &quot;ShopWave&quot;,
      avatar: &quot;https://i.pravatar.cc/150?img=11&quot;,
      quote:
        &quot;Since implementing NexusAI, our conversion rates have increased by 25%. The chatbot guides customers through the purchase process and answers product questions instantly, reducing cart abandonment.&quot;,
      rating: 5,
    },
    {
      name: &quot;Emily Rodriguez&quot;,
      position: &quot;CTO&quot;,
      company: &quot;HealthPlus&quot;,
      avatar: &quot;https://i.pravatar.cc/150?img=20&quot;,
      quote:
        &quot;As a healthcare provider, we needed a secure, HIPAA-compliant solution. NexusAI delivered with exceptional security while providing 24/7 support for our patients' non-urgent questions.&quot;,
      rating: 4,
    },
  ];

  const clientLogos = [
    {
      name: &quot;TechFlow Inc.&quot;,
      logo: &quot;https://github.com/polymet-ai.png&quot;,
    },
    {
      name: &quot;ShopWave&quot;,
      logo: &quot;https://github.com/polymet-ai.png&quot;,
    },
    {
      name: &quot;HealthPlus&quot;,
      logo: &quot;https://github.com/polymet-ai.png&quot;,
    },
    {
      name: &quot;GlobalFinance&quot;,
      logo: &quot;https://github.com/polymet-ai.png&quot;,
    },
    {
      name: &quot;EduSmart&quot;,
      logo: &quot;https://github.com/polymet-ai.png&quot;,
    },
    {
      name: &quot;TravelEase&quot;,
      logo: &quot;https://github.com/polymet-ai.png&quot;,
    },
  ];

  return (
    <section className=&quot;py-20 px-6 md:px-12 lg:px-24 relative&quot;>
      {/* Background elements */}
      <div
        className=&quot;absolute top-1/4 left-0 w-1/4 h-1/4 bg-blue-500/10 rounded-full blur-3xl&quot;
      ></div>

      <div className=&quot;container mx-auto&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <h2
            className=&quot;text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400&quot;
          >
            Trusted by Industry Leaders
          </h2>
          <p className=&quot;text-lg text-blue-100/80 max-w-2xl mx-auto&quot;>
            See what our customers are saying about their experience with
            NexusAI
          </p>
        </div>

        <div
          className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mb-16&quot;
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className=&quot;bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300&quot;
              id={`yax3hf_${index}`}
            >
              <CardContent className=&quot;p-6&quot; id={`plolyu_${index}`}>
                <div className=&quot;flex items-center mb-4&quot; id={`b0tdg2_${index}`}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? &quot;text-yellow-400&quot; : &quot;text-gray-400&quot;}`}
                      fill={i < testimonial.rating ? &quot;currentColor&quot; : &quot;none&quot;}
                      id={`icmsym_${i}`}
                    />
                  ))}
                </div>
                <p
                  className=&quot;text-blue-100/80 mb-6 italic&quot;
                  id={`k2h2oi_${index}`}
                >
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className=&quot;flex items-center&quot; id={`ioqyj3_${index}`}>
                  <Avatar className=&quot;h-12 w-12 mr-4&quot; id={`cuj15k_${index}`}>
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
                      className=&quot;font-semibold text-white&quot;
                      id={`qrf35f_${index}`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className=&quot;text-sm text-blue-100/70&quot;
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

        <div className=&quot;text-center mb-8&quot;>
          <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>
            Powering Conversations at
          </h3>
          <p className=&quot;text-blue-100/70&quot;>
            Join 500+ companies already using NexusAI
          </p>
        </div>

        <div
          className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8&quot;
        >
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className=&quot;flex items-center justify-center&quot;
              id={`u99ua0_${index}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className=&quot;h-12 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0&quot;
                id={`3e5t9l_${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
