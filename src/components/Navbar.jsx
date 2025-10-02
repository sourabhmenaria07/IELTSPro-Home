import React, { useEffect, useState } from "react";
import { Menu, X, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // change 50 to adjust scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "testimonials", label: "Testimonials" },
    { id: "courses", label: "Courses", redirect: "/courses" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`bg-white shadow-md fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-1" : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo  */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="/IELTSPro.svg" className="w-9.5 h-9.5" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                IELTSPro
              </span>
            </div>
          </div>

          {/* desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-700">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={` hover:text-blue-600 font-medium transition-colors duration-200 relative group ${
                  activeSection === item.id ? "text-blue-600" : ""
                }`}
              >
                {item.redirect ? (
                  <Link
                    to={item.redirect}
                    onClick={() => handleMenuItemClick(item.id)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="cursor-pointer"
                    onClick={() => handleMenuItemClick(item.id)}
                  >
                    {item.label}
                  </button>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Get Started
            </button>
          </ul>

          {/*  menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? (
                <X className="w-6 h-6" onClick={() => setIsOpen(false)} />
              ) : (
                <Menu className="w-6 h-6" onClick={() => setIsOpen(true)} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="px-4 pt-2 pb-4 space-y-2 text-gray-700">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-blue-600 font-medium transition-colors duration-200 relative group ${
                  activeSection === item.id ? "text-blue-600" : ""
                }`}
              >
                <button
                  className="cursor-pointer"
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
