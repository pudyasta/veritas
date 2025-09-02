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
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "mt-5 scale-95 rounded-3xl bg-white text-dark-purple shadow-md backdrop-blur-sm"
          : "scale-100 bg-white py-2 text-white md:bg-transparent"
      }`}
    >
      <div className="flex items-center justify-end px-6 py-6 lg:justify-between lg:px-52">
        {/* Desktop Menu */}
        <div className={"hidden w-full justify-between font-bold md:flex"}>
          <a className="transition-colors hover:text-indigo-300" href="#about">
            What is Veritas?
          </a>
          <a
            className="transition-colors hover:text-indigo-300"
            href="#how-it-works"
          >
            How it Works
          </a>
          <a
            className="transition-colors hover:text-indigo-300"
            href="#platforms"
          >
            Platforms
          </a>
          <a
            className="transition-colors hover:text-indigo-300"
            href="#contact"
          >
            Contact & Join
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col items-end justify-end space-y-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-0.5 w-6 bg-black transition-transform md:bg-current ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-opacity md:bg-current ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-transform md:bg-current ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="flex flex-col space-y-4 rounded-b-2xl bg-white px-6 py-6 text-dark-purple shadow-lg transition-all duration-500 md:hidden">
          <a
            className="transition-colors hover:text-indigo-300"
            href="#about"
            onClick={() => setIsOpen(false)}
          >
            What is Veritas?
          </a>
          <a
            className="transition-colors hover:text-indigo-300"
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
          >
            How it Works
          </a>
          <a
            className="transition-colors hover:text-indigo-300"
            href="#platforms"
            onClick={() => setIsOpen(false)}
          >
            Platforms
          </a>
          <a
            className="transition-colors hover:text-indigo-300"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Contact & Join
          </a>
        </div>
      )}
    </nav>
  );
}
