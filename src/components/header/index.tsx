"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";
import "./style.scss"; // SCSS chứa style cho mobile dropdown

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
        "fixed top-0 left-0 w-full z-50 transition-transform duration-500 bg-[#0063AE]/75",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="backdrop-blur-md bg-white/10 shadow-md">
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-white font-banner animate-bounce-slow">
              MeteoViet
            </span>
          </Link>

          <nav className="hidden md:flex space-x-6 items-center text-white text-md font-medium">
            {["home", "features", "guide", "about"].map((item, i) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline underline-offset-4 transition-all hover:text-blue-100"
              >
                {["Trang chủ", "Tính năng", "Hướng dẫn", "Liên hệ"][i]}
              </Link>
            ))}
            <div
              className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-full hover:bg-blue-100 transition-all cursor-pointer"
              onClick={() =>
                window.open("https://zalo.me/4417416028415695579", "_blank")
              }
            >
              Trải nghiệm ngay
            </div>
          </nav>

          <button
            className="md:hidden p-2 text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu open">
            {["home", "features", "guide", "about"].map((item, i) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {["Trang chủ", "Tính năng", "Hướng dẫn", "Liên hệ"][i]}
              </Link>
            ))}
            <div
              className="mobile-cta"
              onClick={() => {
                setMenuOpen(false);
                window.open("https://zalo.me/4417416028415695579", "_blank");
              }}
            >
              Trải nghiệm ngay
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
