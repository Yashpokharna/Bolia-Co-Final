"use client";
import React from "react";

import { useState, useEffect, useRef } from "react";

import { Phone, Mail, MapPin, Globe, Send, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const sectionRef = useRef(null);
  const observerRef = useRef(null);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all required fields!");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: ["Office 09, P 597, Ward 12 C,", "Gandhidham, Gujarat", "INDIA 370201"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: ["+91 2836233033", "+91 9104402201"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: ["associatesbolia@gmail.com"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Website",
      content: ["www.bolia.co.in"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            GET IN TOUCH
          </span>
          <h2 className="mb-6 text-5xl font-black text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Let's Connect
          </h2>
          <div className="w-32 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
            Have questions or ready to transform your financial journey? We're here to help. Reach out and let's start a conversation about your success.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid max-w-6xl gap-6 mx-auto mb-20 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="relative p-6 overflow-hidden text-center transition-all duration-300 bg-white shadow-lg fade-up group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${info.gradient} opacity-5 rounded-bl-full transition-opacity duration-300 group-hover:opacity-10`}></div>
              
              <div className="relative">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  {React.createElement(info.icon, {
                    className: "text-white w-8 h-8",
                  })}
                </div>
                
                <h4 className="mb-3 text-lg font-bold text-gray-900">{info.title}</h4>
                
                <div className="space-y-1">
                  {info.content.map((line, i) => (
                    <p key={i} className="text-sm text-gray-600">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Form and Map Side by Side */}
        <div className="grid gap-12 mb-20 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="fade-up">
            <div className="h-full p-8 bg-white shadow-2xl md:p-10 rounded-3xl">
              <h3 className="mb-2 text-3xl font-bold text-gray-900">
                Send a Message
              </h3>
              <p className="mb-8 text-gray-600">Fill out the form and we'll get back to you shortly</p>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Your Name <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-900 transition-all border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Email Address <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-900 transition-all border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-900 transition-all border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Subject <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-900 transition-all border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Your Message <span className="text-pink-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 text-gray-900 transition-all border-2 border-gray-200 resize-none rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center w-full gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:scale-105 group"
                >
                  Send Message
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Map and Business Hours */}
          <div className="space-y-8 fade-up">
            {/* Map */}
            <div className="overflow-hidden shadow-2xl rounded-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8747684938494!2d70.1334!3d23.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzU5LjkiTiA3MMKwMDgnMDAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bolia Associates Office Location"
              ></iframe>
            </div>

            {/* Business Hours */}
            <div className="relative p-8 overflow-hidden bg-white shadow-xl rounded-3xl">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-10 bg-gradient-to-br from-blue-600 to-purple-600"></div>
              
              <div className="relative flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="mb-4 text-2xl font-bold text-gray-900">Business Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Weekdays </span>
                      <span className="ml-2 text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    {/* <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Saturday</span>
                      <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                    </div> */}
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Sunday</span>
                      <span className="text-gray-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto text-center fade-up">
          <div className="p-10 bg-white shadow-2xl rounded-3xl">
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              Prefer to Meet in Person?
            </h3>
            <p className="mb-6 text-lg text-gray-600">
              Visit our office during business hours for a face-to-face consultation. We're always happy to welcome you.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 transition-all bg-blue-100 rounded-full hover:bg-blue-200">
              <MapPin className="w-4 h-4" />
              Office 09, P 597, Ward 12 C, Gandhidham, Gujarat
            </div>
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

export default Contact;