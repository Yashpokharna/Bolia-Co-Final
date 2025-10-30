"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ValueCard = ({ imgSrc, title, desc, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="p-6 transition-shadow duration-300 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl"
    >
      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-full">
        <Image
          src={imgSrc}
          width={40}
          height={40}
          alt={title}
          className="brightness-0 invert"
        />
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
      <p className="leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
};

const AboutUs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animations
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Stats animation
      const statItems = statsRef.current.querySelectorAll(".stat-item");
      gsap.fromTo(
        statItems,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container px-5 py-16 mx-auto md:px-16"
      id="about"
    >
      <div className="mb-12 text-center">
        <span
          ref={subheadingRef}
          className="text-sm font-semibold tracking-wider text-blue-600 uppercase service-name"
        >
          ABOUT US
        </span>
        <h2
          ref={headingRef}
          className="mt-3 mb-6 text-4xl font-bold text-gray-900 title md:text-5xl"
        >
          Excellence in Financial Consulting
        </h2>
        <p
          ref={descRef}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600"
        >
          With over two decades of experience, we are a leading Chartered
          Accountancy firm dedicated to providing comprehensive financial
          solutions. Our team of experts combines deep industry knowledge with
          innovative approaches to help businesses thrive in today's dynamic
          financial landscape.
        </p>
      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="grid grid-cols-2 gap-6 mb-16 text-center md:grid-cols-4"
      >
        <div className="p-6 text-white bg-blue-600 rounded-lg stat-item">
          <h3 className="mb-2 text-4xl font-bold">25+</h3>
          <p className="text-blue-100">Years Experience</p>
        </div>
        <div className="p-6 text-white bg-green-600 rounded-lg stat-item">
          <h3 className="mb-2 text-4xl font-bold">500+</h3>
          <p className="text-green-100">Happy Clients</p>
        </div>
        <div className="p-6 text-white bg-purple-600 rounded-lg stat-item">
          <h3 className="mb-2 text-4xl font-bold">50+</h3>
          <p className="text-purple-100">Expert Team</p>
        </div>
        <div className="p-6 text-white bg-orange-600 rounded-lg stat-item">
          <h3 className="mb-2 text-4xl font-bold">98%</h3>
          <p className="text-orange-100">Success Rate</p>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        <ValueCard
          imgSrc="/features/1.svg"
          title="Integrity & Trust"
          desc="We uphold the highest standards of professional ethics and transparency, building lasting relationships based on trust and reliability."
          index={0}
        />
        <ValueCard
          imgSrc="/features/2.svg"
          title="Expert Guidance"
          desc="Our certified professionals bring years of expertise in taxation, auditing, and financial planning to ensure your business success."
          index={1}
        />
        <ValueCard
          imgSrc="/features/3.svg"
          title="Client-Centric Approach"
          desc="We tailor our services to meet your unique needs, providing personalized solutions that drive growth and efficiency."
          index={2}
        />
        <ValueCard
          imgSrc="/features/4.svg"
          title="24/7 Support"
          desc="Our dedicated team is always available to address your concerns and provide timely assistance for all your financial matters."
          index={3}
        />
      </div>
    </section>
  );
};

export default AboutUs;