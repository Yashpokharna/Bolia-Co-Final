"use client";

import React, { useEffect, useRef } from 'react';
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
      title: 'Senior Tax Associate',
      location: 'Gandhidham',
      type: 'Full-time',
      mode: 'Hybrid',
      experience: '3-5 years',
      desc: 'Lead direct tax advisory and compliance for diverse clients. Handle tax planning, return filing, and authority liaison.',
      skills: ['Income Tax', 'TDS', 'Tax Planning', 'Appeals']
    },
    {
      id: 2,
      title: 'Audit Manager',
      location: 'Gandhidham',
      type: 'Full-time',
      mode: 'On-site',
      experience: '5+ years',
      desc: 'Manage statutory audits and internal audits across industries. Lead audit teams and client relationships.',
      skills: ['Statutory Audit', 'Internal Audit', 'IFRS', 'Team Management']
    },
    {
      id: 3,
      title: 'GST Consultant',
      location: 'Gandhidham',
      type: 'Full-time',
      mode: 'Hybrid',
      experience: '2-4 years',
      desc: 'Handle GST compliance, advisory, and litigation. Provide strategic GST solutions to clients.',
      skills: ['GST Returns', 'GST Audit', 'ITC', 'Advisory']
    },
    {
      id: 4,
      title: 'Accounts Executive',
      location: 'Gandhidham',
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
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50"
    >
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
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 text-blue-700 border rounded-full shadow-lg bg-blue-500/10 border-blue-500/30 backdrop-blur-xl">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inline-flex w-full h-full bg-blue-500 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            </span>
            <span className="text-sm font-bold tracking-widest">WE'RE HIRING</span>
          </div>

          <h1 className="mb-6 text-5xl font-black leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Build Your Career
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
              With Bolia & Co
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600">
            Join a dynamic team where your expertise meets opportunity. We're
            looking for passionate professionals to grow with us.
          </p>
        </div>

        {/* Job Listings */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Open Positions
          </h2>

          <div className="grid gap-6 jobs-grid md:grid-cols-2">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-8 border shadow-xl job-card rounded-3xl bg-white/90 border-white/50 backdrop-blur-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
                        📍 {job.location}
                      </span>
                      <span className="px-3 py-1 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full">
                        💼 {job.type}
                      </span>
                      <span className="px-3 py-1 text-sm font-semibold text-pink-700 bg-pink-100 rounded-full">
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
                        className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full"
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
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
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
          <div className="p-8 mt-10 text-center border shadow-xl rounded-3xl bg-white/90 border-white/50 backdrop-blur-xl">
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Don't See the Right Role?
            </h3>
            <p className="mb-4 text-gray-600">
              We're always looking for talented professionals. Send us your CV at{" "}
              <a href="mailto:careers@boliaco.com" className="font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                careers@boliaco.com
              </a>
            </p>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="mb-20 perks-section">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Why Join Bolia & Co?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="p-6 border shadow-lg perk-item rounded-2xl bg-white/90 border-white/50 backdrop-blur-xl"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${perk.gradient} flex items-center justify-center text-3xl mb-4`}
                >
                  {perk.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {perk.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-10 border shadow-xl rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border-white/50 backdrop-blur-xl">
            <h2 className="mb-4 text-3xl font-black text-gray-900">
              Ready to Make an Impact?
            </h2>
            <p className="max-w-xl mb-6 text-lg text-gray-600">
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