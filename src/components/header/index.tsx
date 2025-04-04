"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 left-0 w-full bg-white transition-transform duration-500 z-50",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between p-4 px-6 md:px-8">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-window.innerHeight / 2}
          className="cursor-pointer"
        >
          <span className="text-4xl font-bold text-blue-600 font-base">
            METEOVIET
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2}
            className="cursor-pointer text-body-primary text-gray-700 hover:text-blue-600 body-large-medium"
          >
            Trang chủ
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2}
            className="cursor-pointer text-gray-700 hover:text-blue-600 body-large-medium"
          >
            Tính năng
          </Link>
          <Link
            to="guide"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2}
            className="cursor-pointer text-gray-700 hover:text-blue-600 body-large-medium"
          >
            Hướng dẫn
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2}
            className="cursor-pointer text-gray-700 hover:text-blue-600 body-large-medium"
          >
            Liên hệ
          </Link>
        </nav>
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full p-4 flex flex-col space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2}
            className="cursor-pointer text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Trang chủ
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2}
            className="cursor-pointer text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Tính năng
          </Link>
          <Link
            to="guide"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2}
            className="cursor-pointer text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Hướng dẫn
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2}
            className="cursor-pointer text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Liên hệ
          </Link>
        </div>
      )}
    </header>
  );
}
