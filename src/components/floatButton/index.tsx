"use client";

import { useEffect, useState } from "react";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import "./style.scss";

export default function FloatButton() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        // Scroll lên
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        // Scroll xuống
        setShow(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`float-button-wrapper ${show ? "visible" : "hidden"}`}>
      <a
        href="https://www.youtube.com/@MeteoViet"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn youtube"
        aria-label="YouTube"
      >
        <FaYoutube size={20} />
      </a>
      <a
        href="https://www.facebook.com/MeteoViet"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn facebook"
        aria-label="Facebook"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://zalo.me/4417416028415695579"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn zalo"
        aria-label="Zalo"
      >
        <SiZalo size={20} />
      </a>
    </div>
  );
}
