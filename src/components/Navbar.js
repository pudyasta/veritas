"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed font-bold  flex justify-between items-center px-6 py-8 w-full lg:px-52 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-dark-purple backdrop-blur-sm scale-90 rounded-4xl"
          : "bg-transparent text-white scale-100"
      }`}
    >
      <a href="#about" className="hover:text-indigo-300 transition-colors">
        What is Veritas?
      </a>
      <a
        href="#how-it-works"
        className="hover:text-indigo-300 transition-colors"
      >
        How it Works
      </a>
      <a href="#platforms" className="hover:text-indigo-300 transition-colors">
        Platforms
      </a>
      <a href="#contact" className="hover:text-indigo-300 transition-colors">
        Contact & Join
      </a>
    </nav>
  );
}
