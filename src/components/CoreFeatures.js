"use client";

import React, { useEffect, useRef, useState } from "react";
import { Building2, TrendingUp, Store, Home, Heart, GraduationCap, Coffee, Laptop, FileText, Download, BookOpen, Video, Star, Quote, Mail, Phone, MapPin, Calendar, Send, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight, CheckCircle2, Award, Users, Clock, MessageSquare } from "lucide-react";

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      icon: Building2,
      title: "Manufacturing",
      desc: "Streamlined financial solutions for production units, inventory management, and cost optimization.",
      services: ["Cost Accounting", "Inventory Valuation", "GST Compliance", "Process Optimization"],
      gradient: "from-orange-500 via-red-500 to-rose-500",
      clients: "150+"
    },
    {
      icon: TrendingUp,
      title: "Startups & SMEs",
      desc: "Growth-focused advisory for emerging businesses, from incorporation to scaling operations.",
      services: ["Business Setup", "Funding Advisory", "Growth Strategy", "Pitch Decks"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      clients: "200+"
    },
    {
      icon: Store,
      title: "Retail & E-commerce",
      desc: "Comprehensive solutions for multi-channel businesses, online marketplaces, and retail chains.",
      services: ["E-commerce Accounting", "Multi-state GST", "Payment Gateway", "Analytics"],
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      clients: "120+"
    },
    {
      icon: Home,
      title: "Real Estate",
      desc: "Specialized services for developers, builders, and property management companies.",
      services: ["Project Accounting", "RERA Compliance", "Joint Ventures", "Tax Planning"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      clients: "80+"
    },
    {
      icon: Heart,
      title: "Healthcare",
      desc: "Tailored financial management for hospitals, clinics, and healthcare service providers.",
      services: ["Medical Practice Setup", "Insurance Claims", "Regulatory Filing", "Compliance"],
      gradient: "from-red-500 via-rose-500 to-pink-500",
      clients: "90+"
    },
    {
      icon: GraduationCap,
      title: "Education",
      desc: "Financial solutions for schools, colleges, training institutes, and edtech companies.",
      services: ["Trust Management", "Fee Collection", "Grant Accounting", "Audits"],
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      clients: "60+"
    },
    {
      icon: Coffee,
      title: "Hospitality",
      desc: "Accounting and compliance for restaurants, hotels, cafes, and food service businesses.",
      services: ["POS Integration", "FSSAI Compliance", "Franchise Setup", "Inventory"],
      gradient: "from-amber-500 via-orange-500 to-red-500",
      clients: "70+"
    },
    {
      icon: Laptop,
      title: "IT & Software",
      desc: "Tech-savvy solutions for software companies, IT services, and digital agencies.",
      services: ["Revenue Recognition", "R&D Tax Credits", "IP Valuation", "Global Ops"],
      gradient: "from-cyan-500 via-teal-500 to-green-500",
      clients: "110+"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % industries.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="industries"
      className="relative min-h-screen px-5 py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 md:px-16"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px"
          }}
        />
        <div className="absolute rounded-full top-1/4 right-1/4 w-96 h-96 bg-blue-200/30 blur-3xl" />
        <div className="absolute rounded-full bottom-1/4 left-1/4 w-96 h-96 bg-purple-200/30 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 border border-blue-300 rounded-full">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            INDUSTRIES WE SERVE
          </div>
          
          <h2 className="mb-6 text-5xl font-black leading-tight text-gray-900 sm:text-6xl md:text-7xl">
            Specialized Expertise
            <span className="block mt-2 text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
              For Every Sector
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Industry-specific solutions crafted with deep domain knowledge and proven methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isActive = activeIndustry === index || hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-500 ${
                  isActive ? "scale-105 z-10" : "hover:scale-102"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative h-full min-h-[320px] p-6 rounded-2xl border-2 transition-all duration-500 ${
                  isActive 
                    ? `bg-white border-blue-400 shadow-2xl shadow-blue-500/30` 
                    : "bg-white border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl"
                }`}>
                  
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${industry.gradient} opacity-0 transition-opacity duration-500 ${
                    isActive ? "opacity-5" : "group-hover:opacity-3"
                  }`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`mb-4 transition-all duration-500 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} p-3 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      {industry.title}
                    </h3>

                    <p className="flex-grow mb-4 text-sm leading-relaxed text-gray-600">
                      {industry.desc}
                    </p>

                    <div className={`transition-all duration-500 mb-4 ${
                      isActive ? "opacity-100 max-h-32" : "opacity-0 max-h-0 overflow-hidden"
                    }`}>
                      <div className="flex flex-wrap gap-2">
                        {industry.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className={`text-3xl font-black bg-gradient-to-r ${industry.gradient} text-transparent bg-clip-text`}>
                        {industry.clients}
                      </span>
                      <span className="text-xs tracking-wider text-gray-500 uppercase">
                        Clients
                      </span>
                    </div>
                  </div>

                  {isActive && (
                    <>
                      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r ${industry.gradient} animate-ping`} />
                      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r ${industry.gradient}`} />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative p-8 mb-12 overflow-hidden bg-white border-2 border-gray-200 shadow-xl rounded-3xl md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50" />
          
          <div className="relative z-10">
            <h3 className="mb-12 text-4xl font-black text-center text-gray-900">
              The Power of{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Specialization
              </span>
            </h3>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "📋",
                  title: "Sector Knowledge",
                  desc: "Deep understanding of industry-specific regulations, compliance requirements, and best practices",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: "⚡",
                  title: "Faster Solutions",
                  desc: "Pre-built frameworks and proven methodologies accelerate problem-solving and implementation",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: "🎯",
                  title: "Relevant Insights",
                  desc: "Strategic advice backed by real industry data, trends, and competitive benchmarks",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: "🤝",
                  title: "Network Access",
                  desc: "Connect with industry peers, partners, and opportunities through our extensive network",
                  color: "from-orange-500 to-red-500"
                }
              ].map((feature, idx) => (
                <div key={idx} className="group">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="text-center">
          <p className="mb-6 text-lg text-gray-600">
            Don't see your industry?{" "}
            <span className="font-semibold text-gray-900">We serve many more sectors.</span>
          </p>
          <button className="relative px-8 py-4 overflow-hidden font-bold text-white transition-all duration-300 group rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10 flex items-center gap-2">
              Discuss Your Industry Needs
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 group-hover:opacity-100" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default IndustriesSection;