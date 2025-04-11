"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import QrScan from "@/src/assets/static/image/qrScan.png";
import Allow from "@/src/assets/static/image/allow.png";
import Info from "@/src/assets/static/image/info.png";
const steps = [
  {
    image: QrScan,
    text: "Bước 1: Quét QR code hoặc tìm kiếm MeteoViet trên Zalo",
  },
  {
    image: Allow,
    text: "Bước 2: Cho phép truy cập vị trí",
  },
  {
    image: Info,
    text: "Bước 3: Nhận cảnh báo và cập nhật dự báo mỗi ngày",
  },
];

const UserGuide = () => {
  const [animation, setAnimation] = useState("fade-up");

  useEffect(() => {
    const updateAnimation = () => {
      if (window.innerWidth < 768) {
        setAnimation("fade-left");
      } else {
        setAnimation("fade-up");
      }
    };
    updateAnimation();
    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  }, []);

  return (
    <section className="w-full max-w-screen-xl mx-auto p-6 pt-0 font-base">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-900">Hướng dẫn sử dụng</h2>
        <p className="mt-2 text-gray-600 text-lg">
          Chỉ với 3 bước đơn giản để bắt đầu nhận cảnh báo thời tiết chính xác
          trên Zalo
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
            data-aos={animation}
          >
            <Image
              src={step.image}
              alt={`Step ${index + 1}`}
              width={228}
              height={228}
              className="mb-4 md:w-68 md:h-102 w-full object-contain"
            />
            <p className="text-gray-800 text-lg font-medium">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserGuide;
