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
    title: "Dự báo thời tiết siêu chính xác – Dữ liệu cập nhật từng giờ",
  },
  {
    icon: warning,
    title:
      "Cảnh báo thiên tai, mưa lũ, triều cường – Chủ động bảo vệ tài sản & con người.",
  },
  {
    icon: water,
    title:
      "Theo dõi dữ liệu thủy văn & mực nước – Quan trọng cho người dân & doanh nghiệp.",
  },
  {
    icon: mobileInterface,
    title: "Giao diện thân thiện, dễ sử dụng – Ai cũng có thể tiếp cận",
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
    <div className="w-full max-w-screen-xl mx-auto p-6 bg-white">
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
                className="w-12 h-12 flex-none md:w-16 md:h-16"
              />
            </div>
            <span className="text-gray-800 text-lg font-semibold md:text-center ml-4 md:ml-0">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppFeatures;
