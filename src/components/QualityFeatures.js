"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedIcon from "@mui/icons-material/Verified";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reasons = [
    {
      icon: EmojiEventsIcon,
      title: "Award-Winning Excellence",
      desc: "Recognized as one of the top CA firms with multiple industry awards for outstanding client service and professional expertise.",
      stat: "15+ Awards",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: VerifiedIcon,
      title: "Certified Professionals",
      desc: "Our team consists of highly qualified Chartered Accountants with extensive experience in diverse financial domains.",
      stat: "50+ CAs",
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: SecurityIcon,
      title: "Data Security & Privacy",
      desc: "Bank-level encryption and strict confidentiality protocols ensure your financial data is always protected and secure.",
      stat: "100% Secure",
      color: "from-green-400 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: SpeedIcon,
      title: "Quick Turnaround Time",
      desc: "Efficient processes and dedicated teams ensure timely delivery of services without compromising on quality.",
      stat: "48hr Response",
      color: "from-purple-400 to-pink-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: SupportAgentIcon,
      title: "24/7 Client Support",
      desc: "Round-the-clock assistance through multiple channels ensures you always have expert help when you need it.",
      stat: "24/7 Available",
      color: "from-red-400 to-rose-600",
      bgColor: "bg-red-50",
    },
    {
      icon: CheckCircleIcon,
      title: "Proven Track Record",
      desc: "Successfully served 500+ clients across various industries with a 98% client satisfaction and retention rate.",
      stat: "98% Satisfaction",
      color: "from-cyan-400 to-blue-600",
      bgColor: "bg-cyan-50",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".header-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: { trigger: ".header-content", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".reason-item",
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: { trigger: ".reasons-container", start: "top 70%" },
        }
      );

      gsap.fromTo(
        ".stat-number",
        { scale: 0 },
        {
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: ".stats-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % reasons.length),
      4000
    );
    return () => clearInterval(interval);
  }, [reasons.length]);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative px-5 py-24 overflow-hidden md:px-16 bg-gradient-to-br from-white via-gray-50 to-gray-100"
    >
      <div className="container relative z-10 mx-auto">
        {/* Header */}
        <div className="mb-20 text-center header-content">
          <span className="inline-block px-6 py-2 mb-6 text-sm font-bold tracking-wider text-blue-600 border border-blue-200 rounded-full bg-blue-50">
            WHY CHOOSE US
          </span>
          <h2 className="mb-6 text-5xl font-black text-gray-900 md:text-7xl">
            Your Trusted
            <span className="block mt-2 text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
              Financial Partner
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Discover why businesses across India trust us for their financial needs
          </p>
        </div>

        {/* Main Section */}
        <div className="grid gap-12 mb-20 lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-4 reasons-container">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`reason-item relative group cursor-pointer transition-all duration-500 ${
                  index === activeIndex ? "scale-105" : "hover:scale-102"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div
                  className={`relative p-6 overflow-hidden border rounded-2xl transition-all duration-500 ${
                    index === activeIndex
                      ? "bg-white shadow-2xl border-blue-200"
                      : "bg-gray-50 border-gray-200 hover:bg-white"
                  }`}
                >
                  {index === activeIndex && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-10`}></div>
                  )}

                  <div className="relative z-10 flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center transition-all duration-500 ${
                        index === activeIndex ? "scale-110 rotate-3" : ""
                      }`}
                    >
                      {React.createElement(reason.icon, {
                        className: "text-white text-2xl",
                      })}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {reason.title}
                        </h3>
                        <span
                          className={`px-4 py-1 bg-gradient-to-r ${reason.color} text-white text-xs font-bold rounded-full`}
                        >
                          {reason.stat}
                        </span>
                      </div>
                      <p
                        className={`text-gray-600 transition-all duration-500 ${
                          index === activeIndex
                            ? "opacity-100 max-h-40"
                            : "opacity-80 max-h-0 lg:max-h-40"
                        } overflow-hidden`}
                      >
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full h-full min-h-[600px] flex items-center justify-center">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
                    index === activeIndex
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 rotate-12 pointer-events-none"
                  }`}
                >
                  <div className={`relative w-full max-w-md ${reason.bgColor} rounded-3xl p-12 shadow-xl`}>
                    <div className="mb-8 text-center">
                      <div
                        className={`inline-flex w-32 h-32 rounded-3xl bg-gradient-to-br ${reason.color} items-center justify-center shadow-2xl`}
                      >
                        {React.createElement(reason.icon, {
                          className: "text-white text-6xl",
                        })}
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="mb-4 text-3xl font-black text-gray-900">
                        {reason.title}
                      </h3>
                      <div className="inline-block mb-6">
                        <span
                          className={`px-6 py-2 bg-gradient-to-r ${reason.color} text-white text-lg font-bold rounded-full shadow-lg`}
                        >
                          {reason.stat}
                        </span>
                      </div>
                      <p className="text-lg leading-relaxed text-gray-700">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Dots */}
              <div className="absolute flex gap-3 -bottom-8">
                {reasons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-blue-500 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-12 mb-20 bg-white border border-gray-200 shadow-sm stats-grid rounded-3xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-transparent stat-number bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                500+
              </div>
              <p className="text-lg text-gray-700">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-transparent stat-number bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                15+
              </div>
              <p className="text-lg text-gray-700">Industry Awards</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-transparent stat-number bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text">
                98%
              </div>
              <p className="text-lg text-gray-700">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
