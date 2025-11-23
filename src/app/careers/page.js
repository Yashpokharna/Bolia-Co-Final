"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const { theme } = useTheme();
  const careerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      gsap.from(".career-hero", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".job-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".jobs-grid",
          start: "top 80%",
        },
      });

      gsap.from(".perk-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".perks-section",
          start: "top 80%",
        },
      });
    }, careerRef);

    return () => ctx.revert();
  }, []);

  const jobs = [
    {
      id: 1,
      title: 'Senior Tax Associate',
      location: 'Ahmedabad',
      type: 'Full-time',
      mode: 'Hybrid',
      experience: '3-5 years',
      desc: 'Lead direct tax advisory and compliance for diverse clients. Handle tax planning, return filing, and authority liaison.',
      skills: ['Income Tax', 'TDS', 'Tax Planning', 'Appeals']
    },
    {
      id: 2,
      title: 'Audit Manager',
      location: 'Ahmedabad',
      type: 'Full-time',
      mode: 'On-site',
      experience: '5+ years',
      desc: 'Manage statutory audits and internal audits across industries. Lead audit teams and client relationships.',
      skills: ['Statutory Audit', 'Internal Audit', 'IFRS', 'Team Management']
    },
    {
      id: 3,
      title: 'GST Consultant',
      location: 'Ahmedabad',
      type: 'Full-time',
      mode: 'Hybrid',
      experience: '2-4 years',
      desc: 'Handle GST compliance, advisory, and litigation. Provide strategic GST solutions to clients.',
      skills: ['GST Returns', 'GST Audit', 'ITC', 'Advisory']
    },
    {
      id: 4,
      title: 'Accounts Executive',
      location: 'Ahmedabad',
      type: 'Full-time',
      mode: 'Remote/Office',
      experience: '1-2 years',
      desc: 'Maintain books of accounts and ensure timely compliance for SME clients.',
      skills: ['Tally', 'Book-keeping', 'MIS', 'GST Filing']
    }
  ];

  const perks = [
    {
      icon: '🎓',
      title: 'Professional Growth',
      desc: 'Sponsorship for CA, CMA certifications and continuous skill development',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🏖️',
      title: 'Work-Life Balance',
      desc: 'Flexible working hours, hybrid options, and generous leave policy',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💰',
      title: 'Competitive Package',
      desc: 'Industry-leading compensation with performance bonuses',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: '🤝',
      title: 'Collaborative Culture',
      desc: 'Flat hierarchy, mentorship programs, and open communication',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🚀',
      title: 'Fast-Track Growth',
      desc: 'Merit-based promotions and leadership opportunities',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      desc: 'Comprehensive health insurance for you and your family',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <div
      ref={careerRef}
      className={`min-h-screen py-20 ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
          : "bg-gradient-to-br from-white via-blue-50 to-purple-50"
      } relative overflow-hidden`}
    >
      {/* Interactive cursor effect */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      ></div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            top: "10%",
            right: "10%",
            animationDuration: "4s",
          }}
        ></div>
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
            bottom: "20%",
            left: "10%",
            animationDuration: "5s",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      <div className="container relative z-10 px-5 mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="mb-20 text-center career-hero">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 border rounded-full shadow-lg backdrop-blur-xl"
            className={`${
              theme === "dark"
                ? "bg-blue-500/10 border-blue-500/20 text-blue-300"
                : "bg-blue-500/5 border-blue-500/20 text-blue-700"
            }`}
          >
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inline-flex w-full h-full bg-blue-500 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            </span>
            <span className="text-sm font-bold tracking-widest">WE'RE HIRING</span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Build Your Career
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
              With Bolia & Co
            </span>
          </h1>

          <p
            className={`text-xl max-w-3xl mx-auto mb-8 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join a dynamic team where your expertise meets opportunity. We're
            looking for passionate professionals to grow with us.
          </p>

          <a
            href="mailto:careers@boliaco.com"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-500 rounded-full shadow-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-purple-500/50 hover:scale-110"
          >
            Send Your CV
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Job Listings */}
        <div className="mb-20">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Open Positions
          </h2>

          <div className="grid gap-6 jobs-grid md:grid-cols-2">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`job-card group p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20"
                    : "bg-white/80 border-white/50 hover:bg-white hover:shadow-2xl hover:shadow-purple-500/20"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          theme === "dark"
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        📍 {job.location}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          theme === "dark"
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        💼 {job.type}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          theme === "dark"
                            ? "bg-pink-500/20 text-pink-300"
                            : "bg-pink-100 text-pink-700"
                        }`}
                      >
                        🏢 {job.mode}
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  className={`mb-4 text-base leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {job.desc}
                </p>

                <div className="mb-6">
                  <div
                    className={`text-sm font-semibold mb-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Experience: {job.experience}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === "dark"
                            ? "bg-white/5 text-gray-300 border border-white/10"
                            : "bg-gray-100 text-gray-700 border border-gray-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:careers@boliaco.com?subject=Application for ${encodeURIComponent(
                    job.title
                  )}`}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg hover:scale-105"
                >
                  Apply Now
                  <svg
                    className="w-4 h-4"
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
                </a>
              </div>
            ))}
          </div>

          {/* Speculative Applications */}
          <div
            className={`mt-10 p-8 rounded-3xl border backdrop-blur-xl text-center ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white/80 border-white/50"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-3 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Don't See the Right Role?
            </h3>
            <p
              className={`mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We're always looking for talented professionals. Send us your CV
              and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@boliaco.com?subject=Speculative Application"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
              } border-2 border-white/20`}
            >
              Submit Application
            </a>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="mb-20 perks-section">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Why Join Bolia & Co?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className={`perk-item group p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/80 border-white/50 hover:bg-white hover:shadow-xl"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${perk.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {perk.icon}
                </div>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {perk.title}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div
            className={`inline-block p-10 rounded-3xl border backdrop-blur-xl ${
              theme === "dark"
                ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/10"
                : "bg-gradient-to-br from-blue-50 to-purple-50 border-white/50"
            }`}
          >
            <h2
              className={`text-3xl font-black mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Make an Impact?
            </h2>
            <p
              className={`text-lg mb-6 max-w-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Send your CV to{" "}
              <a
                href="mailto:careers@boliaco.com"
                className="font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
              >
                careers@boliaco.com
              </a>
            </p>
            <a
              href="mailto:careers@boliaco.com"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-500 rounded-full shadow-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-purple-500/50 hover:scale-110"
            >
              Start Your Journey
              <svg
                className="w-5 h-5"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}