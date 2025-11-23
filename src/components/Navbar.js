// Navbar.tsx (UPDATED)
import React, { useEffect, useRef, useState } from 'react';
import { 
  Menu,
  X,
  Mail,
  ChevronDown,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Adjusted order of nav items
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    // { name: "Why Us", link: "#why-us" },
    { name: "Industries", link: "#industries" },
    // { name: "Resources", link: "#resources" },
    // { name: "Contact", link: "#contact" }
  ];

  const services = [
    { name: "Tax Planning", icon: "📊" },
    { name: "Audit Services", icon: "✓" },
    { name: "GST Compliance", icon: "📋" },
    { name: "Business Advisory", icon: "📈" },
    { name: "Company Registration", icon: "🏢" },
    { name: "Financial Planning", icon: "💰" }
  ];

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(to right, #9333ea, #ec4899);
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .dropdown-enter {
          animation: dropdownSlide 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-enter {
          animation: slideIn 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .sparkle-animate {
          animation: sparkle 2s ease-in-out infinite;
        }
      `}</style>

      {/* Navbar */}
      <nav
        ref={navbarRef}
        className={`${
          scrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3" 
            : "bg-white/90 backdrop-blur-md py-4"
        } w-full z-50 fixed top-0 left-0 transition-all duration-300 border-b border-gray-100`}
      >
        <div className="container flex items-center justify-between px-5 mx-auto md:px-16 max-w-7xl">
          {/* Logo */}
          <a href="/" className="relative z-50 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-lg opacity-20 bg-gradient-to-br from-purple-600 to-pink-600 blur-md"></div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black leading-none tracking-tight">
                      <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text">
                        Bolia & Co
                      </span>
                    </h2>
                    <span className="block text-[10px] font-semibold tracking-wider text-gray-500 uppercase mt-0.5">
                      Chartered Accountants
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="items-center hidden gap-1 lg:flex">
            {/* Home, About */}
            {navItems.slice(0, 2).map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 transition-colors nav-link hover:text-purple-600"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* ✅ Services Dropdown (third item) */}
            <li 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors nav-link hover:text-purple-600">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 w-64 p-2 mt-2 bg-white border border-gray-100 shadow-2xl top-full rounded-2xl dropdown-enter">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href="#services"
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 group"
                    >
                      <span className="text-xl">{service.icon}</span>
                      <span>{service.name}</span>
                      <ArrowRight className="w-4 h-4 ml-auto transition-transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* Why Us, Industries, Resources */}
            {navItems.slice(2, 5).map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 transition-colors nav-link hover:text-purple-600"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* ✅ Careers as button */}
            <li>
              <a
                href="/careers"
                className="px-5 py-2 ml-2 text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-md bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:opacity-90"
              >
                Careers
              </a>
            </li>

            {/* Contact */}
            <li>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-semibold text-gray-700 transition-colors nav-link hover:text-purple-600"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              aria-label="menu"
              className="p-2 text-gray-700 transition-all rounded-lg lg:hidden hover:bg-gray-100"
              onClick={() => setToggleMenu(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <div className="h-[72px]"></div>

      {/* Mobile Menu Overlay */}
      {toggleMenu && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setToggleMenu(false)}
        />
      )}

      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform duration-300 bg-white shadow-2xl w-80 lg:hidden mobile-menu-enter">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                Menu
              </h3>
            </div>
            <button
              className="p-2 text-gray-700 transition-all rounded-lg hover:bg-gray-100"
              onClick={() => setToggleMenu(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="p-4 space-y-1">
            <li><a href="#home" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li><a href="#about" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600" onClick={() => setToggleMenu(false)}>About</a></li>

            <li>
              <div className="px-4 py-3 text-sm font-semibold text-gray-700">Services</div>
              <div className="pl-4 space-y-1">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href="#services"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-purple-600"
                    onClick={() => setToggleMenu(false)}
                  >
                    <span className="text-lg">{service.icon}</span>
                    <span>{service.name}</span>
                  </a>
                ))}
              </div>
            </li>

            <li><a href="#why-us" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600" onClick={() => setToggleMenu(false)}>Why Us</a></li>
            <li><a href="#industries" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600" onClick={() => setToggleMenu(false)}>Industries</a></li>
            <li><a href="#resources" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600" onClick={() => setToggleMenu(false)}>Resources</a></li>
            
            {/* ✅ Careers as gradient button (mobile) */}
            <li>
              <a
                href="/careers"
                className="block px-4 py-3 text-sm font-semibold text-center text-white transition-all duration-300 rounded-full shadow-md bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:opacity-90"
                onClick={() => setToggleMenu(false)}
              >
                Careers
              </a>
            </li>

            <li><a href="#contact" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600" onClick={() => setToggleMenu(false)}>Contact</a></li>
          </ul>

          {/* Contact Info */}
          <div className="p-6 mt-4 border-t border-gray-100">
            <p className="mb-3 text-sm font-semibold text-gray-500 uppercase">Get In Touch</p>
            <div className="space-y-3">
              <a href="mailto:hello@boliaco.com" className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-purple-600">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <span>hello@boliaco.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;


