import React, { useEffect, useRef } from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUpRight,
  Sparkles,
  Building2,
  User,
  Award,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const socialRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    if (logoRef.current) observer.observe(logoRef.current);
    if (socialRef.current) observer.observe(socialRef.current);
    if (bottomRef.current) observer.observe(bottomRef.current);
    
    linksRef.current.forEach((link) => {
      if (link) observer.observe(link);
    });

    return () => observer.disconnect();
  }, []);

  const footerLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const companyInfo = [
    { icon: Building2, label: 'Established', value: '2001' },
    { icon: User, label: 'Founder', value: 'Gajendra Singh Bolia' },
    { icon: Award, label: 'Sphere', value: 'Chartered Accountants (Since 1997)' },
    { icon: MapPin, label: 'Headquarters', value: 'Gujarat (India)' }
  ];

  return (
    <>
      <style>{`
        .footer-logo {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .footer-logo.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-link {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .footer-link.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-link:nth-child(1) { transition-delay: 0.1s; }
        .footer-link:nth-child(2) { transition-delay: 0.2s; }
        .footer-link:nth-child(3) { transition-delay: 0.3s; }
        .footer-link:nth-child(4) { transition-delay: 0.4s; }

        .footer-social {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s;
        }

        .footer-social.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-bottom {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s;
        }

        .footer-bottom.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .link-item {
          position: relative;
          display: inline-block;
        }

        .link-item::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: linear-gradient(to right, #9333ea, #ec4899);
          transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .link-item:hover::after {
          width: 100%;
        }

        .social-btn {
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .social-btn:hover {
          transform: translateY(-4px);
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .sparkle-icon {
          animation: sparkle 2s ease-in-out infinite;
        }
      `}</style>

      <footer ref={footerRef} className="relative px-5 py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 md:px-16">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.08) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
              width: '100%',
              height: '100%'
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="pb-12 mb-12 border-b-2 border-gray-200">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left: Branding */}
              <div ref={logoRef} className="footer-logo">
                <h2 className="mb-4 text-6xl font-black text-transparent md:text-7xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text">
                  Bolia & Co
                </h2>
                <p className="max-w-lg text-xl text-gray-600">
                  Your Partner in Financial Excellence
                </p>
                
                {/* Company Info */}
                <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
                  {companyInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
                          <Icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">{info.label}</p>
                          <p className="text-sm font-semibold text-gray-700">{info.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Links & Social */}
              <div className="lg:text-right">
                {/* Navigation Links */}
                <nav className="mb-8">
                  <ul className="flex flex-wrap gap-8 text-lg font-semibold lg:justify-end">
                    {footerLinks.map((link, idx) => (
                      <li key={idx} ref={el => linksRef.current[idx] = el} className="footer-link">
                        <a href={link.href} className="inline-flex items-center gap-2 text-gray-700 transition-colors link-item hover:text-purple-600">
                          {link.name}
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Social Links */}
                <div ref={socialRef} className="footer-social">
                  <p className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase lg:text-right">
                    Connect With Us
                  </p>
                  <div className="flex gap-4 lg:justify-end">
                    {socialLinks.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href={social.href}
                          aria-label={social.label}
                          className="flex items-center justify-center text-white transition-all duration-300 shadow-lg w-14 h-14 social-btn bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl hover:shadow-xl hover:shadow-purple-500/50"
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div ref={bottomRef} className="footer-bottom">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600 sparkle-icon" />
                <p className="text-gray-600">
                  © 2025 Bolia & Co. Crafted with excellence
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 text-lg font-bold">
                <a href="https://yashpokharna.in/" className="text-gray-600 transition-colors link-item hover:text-purple-600">
                  A project by Yash Pokharna💻.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;