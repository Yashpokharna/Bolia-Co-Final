"use client";

import React, { useEffect, useRef } from "react";
import { Shield, Sparkles, Target, Users, Zap, Heart } from "lucide-react";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  const values = [
    {
      icon: Shield,
      title: "Integrity & Trust",
      desc: "Building lasting relationships through honest communication and ethical practices",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Strategic Excellence",
      desc: "Delivering precise, thoughtful solutions tailored to your unique goals",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Client Partnership",
      desc: "Collaborating closely to ensure your success becomes our shared mission",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Embracing modern tools and methods for efficient, forward-thinking solutions",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      desc: "Understanding your unique needs and crafting solutions that truly fit",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Sparkles,
      title: "Continuous Growth",
      desc: "Staying ahead of changes to provide you with cutting-edge guidance",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(".fade-up");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen px-5 py-20 overflow-hidden md:px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Animated background blobs */}
      <div className="absolute rounded-full top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute rounded-full bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-orange-400 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute rounded-full top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-green-400 to-cyan-400 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center fade-up">
          <span className="block mb-3 text-sm font-bold tracking-widest text-blue-600 uppercase">
            ABOUT US
          </span>
          <h2 className="mb-6 text-5xl font-black text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Who We Are
          </h2>
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        {/* Main Story Section */}
        <div className="max-w-4xl mx-auto mb-24 space-y-8 text-center fade-up">
          <p className="text-2xl font-light leading-relaxed text-gray-800 md:text-3xl">
            We're not just accountants—we're your{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              strategic financial partners
            </span>
            , dedicated to simplifying complexity and driving your success.
          </p>
          
          {/* <div className="pt-8 space-y-6">
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Born from a vision to transform how businesses approach financial management, 
              we've built our practice on a foundation of trust, expertise, and genuine partnership. 
              We don't just handle numbers—we unlock insights, identify opportunities, and craft 
              strategies that propel your business forward.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Every client has a unique story, and we believe your financial guidance should 
              reflect that individuality. Whether you're navigating tax complexities, seeking 
              growth strategies, or ensuring compliance, we're here with clarity, precision, 
              and unwavering support.
            </p>
          </div> */}
        </div>

        {/* Split Vision/Mission */}
        <div className="grid gap-12 mb-24 md:grid-cols-2 md:gap-16">
          <div className="relative p-12 overflow-hidden bg-white shadow-xl fade-up rounded-3xl">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-10 bg-gradient-to-br from-blue-600 to-purple-600"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                To empower businesses with transparent, innovative financial solutions that 
                drive sustainable growth. We're committed to making financial excellence 
                accessible, understandable, and achievable for every client we serve.
              </p>
            </div>
          </div>

          <div className="relative p-12 overflow-hidden bg-white shadow-xl fade-up rounded-3xl">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-10 bg-gradient-to-br from-green-600 to-teal-600"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                To be recognized as the most trusted financial advisory partner, known for 
                transforming complexity into clarity. We envision a future where every business, 
                regardless of size, has access to world-class financial guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section - Horizontal Timeline Style */}
        <div className="mb-12 text-center fade-up">
          <h3 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            What Drives Us
          </h3>
          <div className="w-24 h-1 mx-auto mb-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Connection Line */}
          <div className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 md:block left-1/2 top-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

          <div className="space-y-16">
            {values.map((value, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 fade-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Content Side */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h4 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                    {value.title}
                  </h4>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {value.desc}
                  </p>
                </div>

                {/* Icon Center */}
                <div className="relative flex items-center justify-center flex-shrink-0">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110 hover:rotate-12`}>
                    {React.createElement(value.icon, {
                      className: "text-white w-10 h-10 md:w-12 md:h-12",
                    })}
                  </div>
                  <div className={`absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${value.color} opacity-20 blur-xl -z-10`}></div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Statement */}
        <div className="max-w-4xl mx-auto text-center fade-up">
          <div className="p-12 bg-white shadow-2xl rounded-3xl">
            <p className="text-2xl font-light leading-relaxed text-gray-800 md:text-3xl">
              "Financial success isn't just about numbers—it's about the{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                confidence
              </span>
              {" "}to make bold decisions and the{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                clarity
              </span>
              {" "}to see the path forward."
            </p>
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
        
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-up.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default AboutUs;