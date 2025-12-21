"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { theme } = useTheme();
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content entrance
      gsap.from(".hero-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2)",
        delay: 0.5,
      });

      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.7,
      });

      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 1,
      });

      gsap.from(".hero-buttons", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${theme === "dark"
          ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
          : "bg-gradient-to-br from-white via-blue-50 to-purple-50"
        } relative overflow-hidden min-h-screen flex items-center justify-center px-5`}
      id="home"
    >
      {/* Interactive cursor effect */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      ></div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)",
            top: "10%",
            left: "10%",
            animationDuration: "4s",
          }}
        ></div>
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
            bottom: "10%",
            right: "10%",
            animationDuration: "5s",
            animationDelay: "1s",
          }}
        ></div>
        <div
          className="absolute w-[350px] h-[350px] rounded-full blur-3xl opacity-15 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.6) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animationDuration: "6s",
            animationDelay: "2s",
          }}
        ></div>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            } 1px, transparent 1px), linear-gradient(90deg, ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            } 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      ></div>



      {/* Main centered content */}
      <div className="container relative z-10 max-w-5xl mx-auto text-center">

        <p
          className={`text-xl mb-7 sm:text-2xl leading-relaxed max-w-3xl mx-auto hero-subtitle ${theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
        >
          Intelea Connect's. That's what we do.
        </p>


        <div className="space-y-10">
          {/* Badge */}
          <div className="flex justify-center hero-badge">
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border ${theme === "dark"
                  ? "bg-blue-500/10 border-blue-500/20 text-blue-300"
                  : "bg-blue-500/5 border-blue-500/20 text-blue-700"
                } backdrop-blur-xl shadow-2xl`}
            >
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full bg-blue-500 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
              </span>
              <span className="text-sm font-bold tracking-widest">
                TRUSTED SINCE 2001
              </span>
            </div>
          </div>



          {/* Main Heading */}
          <div className="space-y-6 hero-title">
            <h1
              className={`text-6xl sm:text-6xl lg:text-6xl xl:text-6xl font-black leading-[1.1] ${theme === "dark" ? "text-white" : "text-gray-900"
                }`}
            >
              We Connect The Financial Dots
              <br />
              <span className="relative inline-block mt-3">
                <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                  So Your Business Stays Ahead
                </span>
                <div className="absolute left-0 w-full h-6 -bottom-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl"></div>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p
            className={`text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto hero-subtitle ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Simplifying complexity, Building confidence in every financial
            decision you make.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 hero-buttons">
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative px-10 py-5 overflow-hidden text-lg font-bold text-white transition-all duration-500 rounded-full shadow-2xl group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-purple-500/50 hover:scale-110 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 transition-opacity duration-500 rounded-full opacity-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 group-hover:opacity-100"></div>
            </button>

            <button
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`group px-10 py-5 ${theme === "dark"
                  ? "bg-white/5 text-white hover:bg-white/10"
                  : "bg-gray-900/5 text-gray-900 hover:bg-gray-900/10"
                } backdrop-blur-xl border-2 ${theme === "dark" ? "border-white/10" : "border-gray-900/10"
                } rounded-full font-bold text-lg transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:border-purple-500/50`}
            >
              <span className="flex items-center gap-3">
                Explore Services
                <svg
                  className="w-5 h-5 transition-transform group-hover:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Minimal stats */}
          {/* <div className="flex items-center justify-center gap-12 pt-12 hero-subtitle">
            <div className="text-center">
              <div
                className={`text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
              >
                20+
              </div>
              <div
                className={`text-sm font-medium mt-1 ${theme === "dark" ? "text-gray-500" : "text-gray-600"
                  }`}
              >
                Years
              </div>
            </div>
            <div
              className={`w-px h-12 ${theme === "dark" ? "bg-white/10" : "bg-gray-900/10"
                }`}
            ></div>
            <div className="text-center">
              <div
                className={`text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}
              >
                500+
              </div>
              <div
                className={`text-sm font-medium mt-1 ${theme === "dark" ? "text-gray-500" : "text-gray-600"
                  }`}
              >
                Clients
              </div>
            </div>
            <div
              className={`w-px h-12 ${theme === "dark" ? "bg-white/10" : "bg-gray-900/10"
                }`}
            ></div>
            <div className="text-center">
              <div
                className={`text-4xl font-black bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent`}
              >
                100%
              </div>
              <div
                className={`text-sm font-medium mt-1 ${theme === "dark" ? "text-gray-500" : "text-gray-600"
                  }`}
              >
                Success
              </div>
            </div>
          </div> */}
        </div>
      </div> 

      {/* Scroll indicator */}
      {/* <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2">
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <span
            className={`text-xs font-semibold uppercase tracking-widest ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Scroll
          </span>
          <div
            className={`w-6 h-10 border-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } rounded-full flex justify-center p-1`}
          >
            <div
              className={`w-1 h-2 ${
                theme === "dark" ? "bg-gray-600" : "bg-gray-400"
              } rounded-full animate-pulse`}
            ></div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 ${theme === "dark" ? "bg-white/20" : "bg-gray-900/10"
            } rounded-full animate-pulse`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        ></div>
      ))}
    </section>
  );
};

export default HeroSection;