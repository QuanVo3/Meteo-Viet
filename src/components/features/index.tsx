"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import mobile from "@/src/assets/static/icon/mobile.gif";
import flood from "@/src/assets/static/icon/flood.gif";
import weather from "@/src/assets/static/icon/weather.gif";
import storm from "@/src/assets/static/icon/storm.gif";

const features = [
  {
    icon: weather,
    title: "- Dự báo thời tiết chính xác\n- Dữ liệu cập nhật từng giờ",
  },
  {
    icon: storm,
    title:
      "- Cảnh báo thiên tai, mưa lũ, triều cường\n- Chủ động bảo vệ tài sản & con người.",
  },
  {
    icon: flood,
    title:
      "- Theo dõi dữ liệu thủy văn & mực nước\n- Quan trọng cho người dân & doanh nghiệp.",
  },
  {
    icon: mobile,
    title: "- Giao diện thân thiện, dễ sử dụng\n- Ai cũng có thể tiếp cận",
  },
];

const aosEffects = ["fade-up", "zoom-in", "flip-left", "fade-down"];

const AppFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 50,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="w-full px-4 py-12 md:py-20 font-base bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Tính năng nổi bật
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Giúp bạn luôn chủ động trước mọi tình huống thời tiết
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos={aosEffects[index % aosEffects.length]}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-4">
                <Image
                  src={feature.icon}
                  alt="Feature Icon"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-800 md:text-lg font-medium  whitespace-pre-line leading-relaxed ">
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://zalo.me/4417416028415695579"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r to-[#0063AE] from-[#0063AE]/75 hover:brightness-110 text-white text-base md:text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            🚀 Trải nghiệm ngay trên Zalo!
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
