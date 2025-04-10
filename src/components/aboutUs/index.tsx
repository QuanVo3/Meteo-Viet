"use client";

import React from "react";
import { FaFacebookF, FaEnvelope, FaPhone, FaYoutube } from "react-icons/fa";

const AboutUsCTA = () => {
  return (
    <footer className="w-full bg-blue-50 p-6 text-center rounded-lg shadow-md ">
      {/* Phần trên - Logo */}
      <div className="flex justify-center ">
        <span className="text-4xl font-extrabold text-blue-600 font-banner">
          METEOVIET
        </span>
      </div>

      {/* Đường ngang */}
      <hr className="border-t border-gray-300 my-6" />

      {/* Phần dưới - Liên kết */}
      <div className="flex flex-col items-center gap-4">
        {/* Mô tả */}
        <p className="text-gray-700 text-md text-center max-w-md font-base">
          Kết Nối Dữ Liệu, Dự Báo Chính Xác, Chủ Động Tương Lai
        </p>
        <div className="flex gap-4">
          {/* Nút email - mở Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=meteoviet@gmail.com"
            className="text-blue-600 text-xl p-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>

          {/* Nút gọi điện - chỉ hiển thị trên mobile */}
          {/* <a
            href="tel:0965001777"
            className="block md:hidden text-blue-600 text-xl p-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            <FaPhone />
          </a> */}

          {/* Facebook */}
          <a
            href="https://facebook.com/MeteoViet"
            className="text-blue-600 text-xl p-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@MeteoViet"
            className="text-blue-600 text-xl p-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Dòng số điện thoại - chỉ hiển thị trên desktop */}
        {/* <p className="hidden md:block text-body-primary body-small-regular">
          ☎️ Tel: <strong>0965 001 777</strong>
        </p> */}
      </div>
    </footer>
  );
};

export default AboutUsCTA;
