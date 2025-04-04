"use client";

import React from "react";
import Image from "next/image";

import { FaFacebookF, FaEnvelope, FaPhone } from "react-icons/fa";

const AboutUsCTA = () => {
  return (
    <footer className="w-full bg-blue-50 p-6 text-center rounded-lg shadow-md">
      {/* Phần trên - Logo */}
      <div className="flex justify-center">
        <span className="text-4xl font-bold text-blue-600 font-base">
          METEOVIET
        </span>
      </div>

      {/* Đường ngang */}
      <hr className="border-t border-gray-300 my-6" />

      {/* Phần dưới - Liên kết */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a
            href="mailto:support@meteoviet.vn"
            className="text-blue-600 text-xl p-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:0123456789"
            className="text-blue-600 text-xl p-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            <FaPhone />
          </a>
          <a
            href="https://facebook.com/MeteoViet"
            className="text-blue-600 text-xl p-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </div>

        <p className="text-gray-700 text-sm text-center max-w-md">
          🌍 <strong>MeteoViet</strong> – Công nghệ dự báo thời tiết dành riêng
          cho người Việt!
        </p>
      </div>
    </footer>
  );
};

export default AboutUsCTA;
