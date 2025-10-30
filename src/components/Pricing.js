"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Globe, Send, Building2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const map = mapRef.current;

    if (!heading || !left || !right || !map) return;

    // Heading animation
    gsap.fromTo(
      heading.children,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
        },
      }
    );

    // Left side animation
    gsap.fromTo(
      left,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: left,
          start: "top 80%",
        },
      }
    );

    // Right side animation
    gsap.fromTo(
      right,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: right,
          start: "top 80%",
        },
      }
    );

    // Map animation
    gsap.fromTo(
      map,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: map,
          start: "top 85%",
        },
      }
    );
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

  return (
    <section
      ref={sectionRef}
      className="relative px-5 py-20 overflow-hidden md:px-16 bg-gradient-to-b from-white via-purple-50/30 to-white"
      id="contact"
    >
      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div ref={headingRef} className="mb-20 text-center">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-bold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
            Contact Us
          </div>
          
          <h2 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Get In Touch
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Ready to take your business to the next level? We're here to help you every step of the way.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 mb-20 lg:grid-cols-2">
          {/* Left Side - Contact Details */}
          <div ref={leftRef} className="space-y-8">
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                Let's Start a Conversation
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Whether you have questions about our services or need expert guidance for your business, our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-5 p-6 transition-all duration-300 bg-white border-l-4 border-purple-600 rounded-lg shadow-md hover:shadow-xl">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">Visit Our Office</h4>
                  <p className="text-gray-600">
                    Office 09, P 597, Ward 12 C,<br />
                    Gandhidham, Gujarat<br />
                    INDIA 370201
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 p-6 transition-all duration-300 bg-white border-l-4 border-pink-600 rounded-lg shadow-md hover:shadow-xl">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-100 to-rose-100">
                  <Phone className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">
                    +91 2836233033<br />
                    +91 9104402201
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 p-6 transition-all duration-300 bg-white border-l-4 rounded-lg shadow-md border-rose-600 hover:shadow-xl">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-rose-100 to-pink-100">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">
                    associatesbolia@gmail.com
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex gap-5 p-6 transition-all duration-300 bg-white border-l-4 border-indigo-600 rounded-lg shadow-md hover:shadow-xl">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">Visit Website</h4>
                  <p className="text-gray-600">
                    www.bolia.co.in
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600">
              <div className="flex items-start gap-4">
                <Building2 className="flex-shrink-0 w-8 h-8 text-white" />
                <div>
                  <h4 className="mb-3 text-xl font-bold text-white">Business Hours</h4>
                  <div className="space-y-2 text-purple-50">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div ref={rightRef}>
            <div className="p-8 bg-white shadow-2xl md:p-10 rounded-2xl">
              <h3 className="mb-8 text-2xl font-bold text-gray-900">
                Send Us a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Full Name <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-900 transition-all border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-purple-600 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email Address <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-900 transition-all border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-purple-600 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-900 transition-all border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-purple-600 focus:outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Subject <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-900 transition-all border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-purple-600 focus:outline-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Message <span className="text-pink-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 text-gray-900 transition-all border-2 border-gray-200 rounded-lg resize-none bg-gray-50 focus:bg-white focus:border-purple-600 focus:outline-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center w-full gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-xl hover:shadow-2xl hover:scale-105 group"
                >
                  Send Message
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div ref={mapRef}>
          <h3 className="mb-8 text-3xl font-bold text-center text-gray-900">
            Find Us on Map
          </h3>
          <div className="overflow-hidden shadow-2xl rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8747684938494!2d70.1334!3d23.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzU5LjkiTiA3MMKwMDgnMDAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bolia Associates Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;