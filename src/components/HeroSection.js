"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { theme } = useTheme();
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content entrance
      gsap.from(".hero-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
        delay: 0.3,
      });

      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      });

      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.from(".hero-buttons", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.1,
      });

      gsap.from(".hero-stats", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.4,
      });

      // Floating elements
      gsap.to(".float-1", {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".float-2", {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(".float-3", {
        y: -25,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
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
        } relative overflow-hidden min-h-screen flex items-center pt-20 pb-16 px-5`}
      id="home"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-30 float-1"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
            top: "10%",
            left: "5%",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30 float-2"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            top: "40%",
            right: "10%",
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-20 float-3"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)",
            bottom: "10%",
            left: "30%",
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5
              }px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            } 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container relative z-10 grid items-center gap-12 mx-auto lg:grid-cols-2 max-w-7xl">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="hero-badge">
            <div
              className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border-2 ${theme === "dark"
                  ? "bg-blue-500/10 border-blue-500/30 text-blue-300"
                  : "bg-blue-500/10 border-blue-500/30 text-blue-700"
                } backdrop-blur-xl`}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-blue-500 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-blue-500 rounded-full"></span>
              </span>
              <span className="text-sm font-bold tracking-wider">
                TRUSTED SINCE 2001
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 hero-title">
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] ${theme === "dark" ? "text-white" : "text-gray-900"
                }`}
            >
              Your Financial
              <br />
              <span className="relative inline-block mt-2">
                Success
                <div className="absolute left-0 w-full h-4 bottom-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 -skew-y-1"></div>
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                Partner
              </span>
            </h1>
          </div>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl leading-relaxed max-w-xl hero-subtitle ${theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
          >
            <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Bolia&co
            </span>{" "}
            empowers businesses with expert accounting, tax planning, and financial
            strategies that drive sustainable growth and compliance excellence.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap gap-4 hero-buttons">
            <Link href="#Contact">
              <button className="relative px-8 py-4 overflow-hidden text-base font-bold text-white transition-all duration-300 shadow-2xl group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl hover:shadow-blue-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 group-hover:opacity-100"></div>
              </button>
            </Link>
            <Link href="#services">
              <button
                className={`group px-8 py-4 ${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
                } backdrop-blur-xl border-2 border-white/20 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105`}
              >
                <span className="flex items-center gap-2">
                  Our Services
                  <svg
                    className="w-5 h-5 transition-transform group-hover:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div> */}
          <div className="flex flex-wrap gap-4 hero-buttons">
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative px-8 py-4 overflow-hidden text-base font-bold text-white transition-all duration-300 shadow-2xl group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 group-hover:opacity-100"></div>
            </button>

            <button
              onClick={() =>
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
              }
              className={`group px-8 py-4 ${theme === "dark"
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
                } backdrop-blur-xl border-2 border-white/20 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105`}
            >
              <span className="flex items-center gap-2">
                Our Services
                <svg
                  className="w-5 h-5 transition-transform group-hover:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>

        </div> {/* <-- Missing closing tag added here */}

        {/* Right Visual */}
        <div className="relative items-center justify-center hidden lg:flex">
          <div className="relative w-full max-w-2xl aspect-square">
            {/* Main circle with gradient border */}
            <div className="absolute inset-0 p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
              <div
                className={`w-full h-full rounded-full ${theme === "dark"
                    ? "bg-slate-900/90"
                    : "bg-white/90"
                  } backdrop-blur-xl flex items-center justify-center`}
              >
                {/* Inner content */}
                <div className="p-12 space-y-6 text-center">
                  <div
                    className={`text-8xl font-black ${theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                  >
                    CA
                  </div>
                  <div className="text-6xl">🏆</div>
                  <p
                    className={`text-xl font-bold ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Award-Winning
                    <br />
                    Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Floating service cards */}
            <div
              className={`absolute -top-8 -left-8 ${theme === "dark"
                  ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                  : "bg-gradient-to-br from-blue-100 to-purple-100"
                } backdrop-blur-xl border-2 ${theme === "dark" ? "border-white/10" : "border-white/50"
                } rounded-2xl p-6 shadow-2xl float-1`}
            >
              <div className="mb-2 text-4xl">📊</div>
              <div
                className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
              >
                Tax Advisory
              </div>
            </div>

            <div
              className={`absolute -bottom-8 -right-8 ${theme === "dark"
                  ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                  : "bg-gradient-to-br from-purple-100 to-pink-100"
                } backdrop-blur-xl border-2 ${theme === "dark" ? "border-white/10" : "border-white/50"
                } rounded-2xl p-6 shadow-2xl float-2`}
            >
              <div className="mb-2 text-4xl">✓</div>
              <div
                className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
              >
                Audit Services
              </div>
            </div>

            <div
              className={`absolute top-1/2 -right-12 -translate-y-1/2 ${theme === "dark"
                  ? "bg-gradient-to-br from-pink-500/20 to-orange-500/20"
                  : "bg-gradient-to-br from-pink-100 to-orange-100"
                } backdrop-blur-xl border-2 ${theme === "dark" ? "border-white/10" : "border-white/50"
                } rounded-2xl p-6 shadow-2xl float-3`}
            >
              <div className="mb-2 text-4xl">📈</div>
              <div
                className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
              >
                Business Growth
              </div>
            </div>

            <div
              className={`absolute top-1/2 -left-12 -translate-y-1/2 ${theme === "dark"
                  ? "bg-gradient-to-br from-green-500/20 to-teal-500/20"
                  : "bg-gradient-to-br from-green-100 to-teal-100"
                } backdrop-blur-xl border-2 ${theme === "dark" ? "border-white/10" : "border-white/50"
                } rounded-2xl p-6 shadow-2xl float-1`}
            >
              <div className="mb-2 text-4xl">⚖️</div>
              <div
                className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
              >
                Compliance
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span
            className={`text-sm font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
          >
            Scroll
          </span>
          <svg
            className={`w-6 h-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
