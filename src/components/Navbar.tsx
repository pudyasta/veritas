"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white text-dark-purple backdrop-blur-sm shadow-md scale-95 rounded-3xl mt-5"
          : "md:bg-transparent bg-white text-white scale-100 py-2"
      }`}
    >
      <div className="flex lg:justify-between justify-end items-center px-6 py-6 lg:px-52 ">
        {/* Desktop Menu */}
        <div className={"hidden md:flex justify-between  w-full font-bold"}>
          <a href="#about" className="hover:text-indigo-300 transition-colors">
            What is Veritas?
          </a>
          <a
            href="#how-it-works"
            className="hover:text-indigo-300 transition-colors"
          >
            How it Works
          </a>
          <a
            href="#platforms"
            className="hover:text-indigo-300 transition-colors"
          >
            Platforms
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-300 transition-colors"
          >
            Contact & Join
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-end items-end space-y-1 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-0.5 w-6 bg-black md:bg-current  transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black md:bg-current transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black md:bg-current transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 py-6 bg-white text-dark-purple shadow-lg transition-all duration-500 rounded-b-2xl ">
          <a
            href="#about"
            className="hover:text-indigo-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            What is Veritas?
          </a>
          <a
            href="#how-it-works"
            className="hover:text-indigo-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How it Works
          </a>
          <a
            href="#platforms"
            className="hover:text-indigo-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Platforms
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact & Join
          </a>
        </div>
      )}
    </nav>
  );
}
