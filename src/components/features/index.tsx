"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import weather from "@/src/assets/static/icon/cloudy.png";
import warning from "@/src/assets/static/icon/warning.png";
import water from "@/src/assets/static/icon/tide.png";
import mobileInterface from "@/src/assets/static/icon/interface.png";

const features = [
  {
    icon: weather,
    title: "- Dự báo thời tiết siêu chính xác\n - Dữ liệu cập nhật từng giờ",
  },
  {
    icon: warning,
    title:
      "- Cảnh báo thiên tai, mưa lũ, triều cường\n - Chủ động bảo vệ tài sản & con người.",
  },
  {
    icon: water,
    title:
      "- Theo dõi dữ liệu thủy văn & mực nước\n - Quan trọng cho người dân & doanh nghiệp.",
  },
  {
    icon: mobileInterface,
    title: "- Giao diện thân thiện, dễ sử dụng\n - Ai cũng có thể tiếp cận",
  },
];

const AppFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 pb-0 bg-white font-base">
      {/* Tiêu đề phần tính năng */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-900">Tính năng nổi bật</h2>
        <p className="mt-2 text-gray-600 text-lg">
          Giúp bạn luôn chủ động trước mọi tình huống thời tiết
        </p>
      </div>

      {/* Grid tính năng */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-row md:flex-col items-center md:items-center rounded-lg bg-white shadow-md p-4"
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <div className="md:mb-4 md:w-full flex justify-center">
              <Image
                src={feature.icon}
                alt="Feature Icon"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 shrink-0"
              />
            </div>
            <span className="text-gray-800 text-base md:text-lg font-semibold md:text-center ml-4 md:ml-0 whitespace-pre-line">
              {feature.title}
            </span>
          </div>
        ))}
      </div>

      {/* Nút Call-to-Action */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://zalo.me/4417416028415695579"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
        >
          Trải nghiệm ngay trên Zalo!
        </a>
      </div>
    </div>
  );
};

export default AppFeatures;
