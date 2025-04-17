"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import QrScan from "@/src/assets/static/image/qrScan.png";
import Allow from "@/src/assets/static/image/allow.png";
import Info from "@/src/assets/static/image/info.png";

const steps = [
  {
    image: QrScan,
    text: "Quét QR code hoặc tìm kiếm MeteoViet trên Zalo",
  },
  {
    image: Allow,
    text: "Dự báo theo vị trí chính xác, thời gian thực",
  },
  {
    image: Info,
    text: "Nhận cảnh báo và cập nhật dự báo mỗi ngày",
  },
];

const UserGuide = () => {
  const [animation, setAnimation] = useState("fade-up");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      once: true,
    });

    const updateAnimation = () => {
      setAnimation(window.innerWidth < 768 ? "fade-left" : "fade-up");
    };

    updateAnimation();
    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  }, []);

  return (
    <section className="w-full px-4  py-12 md:py-20 font-base bg-gradient-to-b from-indigo-50 via-white to-blue-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Hướng dẫn sử dụng
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Chỉ với 3 bước đơn giản để bắt đầu nhận cảnh báo thời tiết chính xác
            trên Zalo
          </p>
        </div>

        {/* Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300"
              data-aos={animation}
            >
              {/* Step Number Indicator */}
              <div className="absolute hidden md:flex -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full  items-center justify-center font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Image */}
              <div className="w-full flex justify-center mb-5">
                <Image
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  width={220}
                  height={220}
                  className="rounded-lg transition-transform duration-300 hover:scale-105 object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserGuide;
