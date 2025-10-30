"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DescriptionIcon from "@mui/icons-material/Description";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalculateIcon from "@mui/icons-material/Calculate";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      icon: CalculateIcon,
      title: "Tax Consultation",
      subtitle: "Strategic Tax Planning",
      desc: "Minimize tax liabilities with expert planning and compliance strategies tailored to your business.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: VerifiedUserIcon,
      title: "Audit Services",
      subtitle: "Certified Auditing",
      desc: "Comprehensive statutory and internal audits ensuring financial accuracy and regulatory compliance.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: BusinessCenterIcon,
      title: "Company Formation",
      subtitle: "Business Registration",
      desc: "Complete support for company registration, partnership deeds, and business incorporation.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: TrendingUpIcon,
      title: "Financial Planning",
      subtitle: "Growth Advisory",
      desc: "Strategic financial advice for business growth, investments, and wealth management solutions.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: DescriptionIcon,
      title: "Accounting & Books",
      subtitle: "Professional Bookkeeping",
      desc: "Accurate bookkeeping, payroll management, and financial statement preparation for your business.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: AccountBalanceIcon,
      title: "GST & Compliance",
      subtitle: "Regulatory Filing",
      desc: "GST registration, return filing, and complete compliance with all statutory requirements.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Left panel slide in
      gsap.fromTo(
        leftPanelRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Cards stagger animation
      const cards = cardsContainerRef.current.querySelectorAll(".service-card");
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          x: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
    id="services"
      ref={sectionRef}
      className="relative min-h-screen px-5 py-20 overflow-hidden md:px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Animated background shapes */}
      <div className="absolute rounded-full top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute rounded-full bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-orange-400 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute rounded-full top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-green-400 to-cyan-400 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10 mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <div className="inline-block">
            <span className="block mb-3 text-sm font-bold tracking-widest text-blue-600 uppercase">
              What We Offer
            </span>
            <h2 className="mb-6 text-5xl font-black text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Our Services
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col items-start gap-12 lg:flex-row">
          {/* Left Info Panel */}
          <div
            ref={leftPanelRef}
            className="space-y-8 lg:w-1/3 lg:sticky lg:top-24"
          >
            <div className="p-8 bg-white border border-gray-100 shadow-2xl rounded-3xl">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${services[activeIndex].color} flex items-center justify-center mb-6 shadow-lg transform transition-transform hover:scale-110`}>
                {React.createElement(services[activeIndex].icon, {
                  className: "text-white text-4xl",
                })}
              </div>
              <h3 className="mb-3 text-3xl font-bold text-gray-900">
                {services[activeIndex].title}
              </h3>
              <p className="mb-6 text-lg text-gray-600">
                {services[activeIndex].desc}
              </p>
              <button className="flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-4 group">
                Learn More
                <ArrowForwardIcon className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4">
              {/* <div className="p-6 text-white shadow-xl bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl">
                <p className="mb-1 text-4xl font-bold">500+</p>
                <p className="text-sm text-blue-100">Clients Served</p>
              </div> */}
              <div className="flex items-center justify-center p-6 text-white shadow-xl bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl">
                <p className="mb-1 text-4xl font-bold">25+    </p>
                <p className="ml-2 text-sm text-green-100">    Years Expertise</p>
              </div>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div ref={cardsContainerRef} className="grid gap-6 lg:w-2/3 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="cursor-pointer service-card group"
                onMouseEnter={() => handleCardHover(index)}
              >
                <div className={`relative h-full rounded-2xl p-8 transition-all duration-500 ${
                  activeIndex === index
                    ? "bg-white shadow-2xl scale-105 border-2 border-blue-200"
                    : "bg-white/80 shadow-lg hover:shadow-xl border border-gray-100"
                }`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-md transition-all duration-300 ${
                    activeIndex === index ? "scale-110 rotate-6" : "group-hover:scale-105"
                  }`}>
                    {React.createElement(service.icon, {
                      className: "text-white text-2xl",
                    })}
                  </div>

                  {/* Content */}
                  <div>
                    <span className="block mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      {service.subtitle}
                    </span>
                    <h4 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                      {service.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {service.desc}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className={`absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}>
                    <ArrowForwardIcon className="text-xl text-white" />
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-10" : ""
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Services;