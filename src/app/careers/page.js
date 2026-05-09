"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
const careerRef = useRef(null);
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
      title: "Senior Tax Associate",
      location: "Gandhidham",
      type: "Full-time",
      mode: "Hybrid",
      experience: "3-5 years",
      desc: "Lead direct tax advisory and compliance for diverse clients. Handle tax planning, return filing, and authority liaison.",
      skills: ["Income Tax", "TDS", "Tax Planning", "Appeals"],
    },
    {
      id: 2,
      title: "Audit Manager",
      location: "Gandhidham",
      type: "Full-time",
      mode: "On-site",
      experience: "5+ years",
      desc: "Manage statutory audits and internal audits across industries. Lead audit teams and client relationships.",
      skills: [
        "Statutory Audit",
        "Internal Audit",
        "IFRS",
        "Team Management",
      ],
    },
    {
      id: 3,
      title: "GST Consultant",
      location: "Gandhidham",
      type: "Full-time",
      mode: "Hybrid",
      experience: "2-4 years",
      desc: "Handle GST compliance, advisory, and litigation. Provide strategic GST solutions to clients.",
      skills: ["GST Returns", "GST Audit", "ITC", "Advisory"],
    },
    {
      id: 4,
      title: "Accounts Executive",
      location: "Gandhidham",
      type: "Full-time",
      mode: "Remote/Office",
      experience: "1-2 years",
      desc: "Maintain books of accounts and ensure timely compliance for SME clients.",
      skills: ["Tally", "Book-keeping", "MIS", "GST Filing"],
    },
  ];

  const perks = [
    {
      icon: "🎓",
      title: "Professional Growth",
      desc: "Sponsorship for CA, CMA certifications and continuous skill development",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🏖️",
      title: "Work-Life Balance",
      desc: "Flexible working hours, hybrid options, and generous leave policy",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "💰",
      title: "Competitive Package",
      desc: "Industry-leading compensation with performance bonuses",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: "🤝",
      title: "Collaborative Culture",
      desc: "Flat hierarchy, mentorship programs, and open communication",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: "🚀",
      title: "Fast-Track Growth",
      desc: "Merit-based promotions and leadership opportunities",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      desc: "Comprehensive health insurance for you and your family",
      gradient: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <div
      ref={careerRef}
      className="relative isolate z-0 min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute right-[10%] top-[10%] h-[500px] w-[500px] rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            animationDuration: "4s",
          }}
        />

        <div
          className="absolute bottom-[20%] left-[10%] h-[400px] w-[400px] rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
            animationDuration: "5s",
            animationDelay: "1s",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-5">
        {/* Hero */}
        <div className="career-hero mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-blue-700 shadow-lg backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
            </span>

            <span className="text-sm font-bold tracking-widest">
              WE&apos;RE HIRING
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-black leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Build Your Career
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              With Bolia & Co
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            Join a dynamic team where your expertise meets opportunity.
            We&apos;re looking for passionate professionals to grow with us.
          </p>
        </div>

        {/* Jobs */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Open Positions
          </h2>

          <div className="jobs-grid grid gap-6 md:grid-cols-2">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="job-card relative z-10 rounded-3xl border border-white/50 bg-white/90 p-8 shadow-xl backdrop-blur-xl"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                        📍 {job.location}
                      </span>

                      <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                        💼 {job.type}
                      </span>

                      <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
                        🏢 {job.mode}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-base leading-relaxed text-gray-600">
                  {job.desc}
                </p>

                <div className="mb-6">
                  <div className="mb-2 text-sm font-semibold text-gray-500">
                    Experience: {job.experience}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
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
                  className="relative z-20 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Apply Now

                  <svg
                    className="h-4 w-4"
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

          {/* Extra */}
          <div className="relative z-10 mt-10 rounded-3xl border border-white/50 bg-white/90 p-8 text-center shadow-xl backdrop-blur-xl">
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Don&apos;t See the Right Role?
            </h3>

            <p className="mb-4 text-gray-600">
              We&apos;re always looking for talented professionals. Send us your
              CV at{" "}
              <a
                href="mailto:careers@boliaco.com"
                className="font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
              >
                careers@boliaco.com
              </a>
            </p>
          </div>
        </div>

        {/* Perks */}
        <div className="perks-section mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Why Join Bolia & Co?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="perk-item relative z-10 rounded-2xl border border-white/50 bg-white/90 p-6 shadow-lg backdrop-blur-xl"
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${perk.gradient} text-3xl`}
                >
                  {perk.icon}
                </div>

                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {perk.title}
                </h3>

                <p className="text-sm text-gray-600">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block rounded-3xl border border-white/50 bg-gradient-to-br from-blue-50 to-purple-50 p-10 shadow-xl backdrop-blur-xl">
            <h2 className="mb-4 text-3xl font-black text-gray-900">
              Ready to Make an Impact?
            </h2>

            <p className="mb-6 max-w-xl text-lg text-gray-600">
              Send your CV to{" "}
              <a
                href="mailto:careers@boliaco.com"
                className="font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
              >
                careers@boliaco.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}