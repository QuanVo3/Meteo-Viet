"use client";

import React, { useEffect } from "react";
import { Mail, Globe, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import qr from "@/src/assets/static/background/QrMeteoViet.jpg";

const AboutUsCta: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#0052A0] to-[#007BBA] text-white py-10 font-base shadow-inner shadow-blue-800/30">
      <div
        className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm md:text-base text-center md:text-left"
        data-aos="fade-up"
      >
        {/* Column 1: Logo + Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold font-banner mb-3">MeteoViet</h2>
          <p className="leading-relaxed text-white/90">
            Kết Nối Dữ Liệu, Dự Báo Chính Xác, <br />
            Chủ Động Tương Lai!
          </p>
        </div>

        {/* Column 2: Info Channels */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-4 text-lg">Kênh thông tin</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-white/90" />
              <a
                href="https://zalo.me/4417416028415695579"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Zalo Official Account
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="w-5 h-5 text-white/90" />
              <a
                href="https://facebook.com/meteo.viet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Fanpage Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-white/90" />
              <a
                href="https://meteoviet.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Website chính thức
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-white/90" />
              <a href="mailto:hotro@meteoviet.vn" className="hover:underline">
                meteoviet@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: QR Code */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-4 text-lg">Dùng thử ngay</h3>
          <div className="w-fit flex flex-col justify-center items-center">
            <Image
              src={qr.src}
              alt="QR Code"
              width={96}
              height={96}
              className="w-24 h-24 md:w-28 md:h-28 rounded-md bg-white p-1 mb-3 shadow-md hover:scale-105 transition-transform duration-300"
            />
            <p className="text-white/90">Quét mã QR để mở mini app trên Zalo</p>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="border-t border-white/30 mt-10 pt-6 text-center text-xs text-white/80 px-4">
        © 2025 MeteoViet. Đài Khí Tượng Thủy Văn Nam Bộ và Tây Nguyên
      </div>
    </footer>
  );
};

export default AboutUsCta;
