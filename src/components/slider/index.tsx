"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import CSS Swiper nếu chưa có
import { data } from "@/src/app/resources/news/helper";
import Card from "../cards";

const NewsSlider = () => {
  const [divWidth, setDivWidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  // Tính toán số lượng slide có thể hiển thị
  const getSlidesPerView = () => {
    if (divWidth <= 0) return 1;
    const minCardWidth = 320; // Card tối thiểu 320px
    return Math.max(1, Math.floor(divWidth / minCardWidth)); // Tối thiểu 1 slide
  };

  // Theo dõi kích thước container
  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setDivWidth(divRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth(); // Gọi ngay khi component mount

    // Sử dụng ResizeObserver thay vì sự kiện resize để tối ưu hiệu suất
    const resizeObserver = new ResizeObserver(updateWidth);
    if (divRef.current) resizeObserver.observe(divRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-4 lg:gap-6">
      {/* Tiêu đề với responsive font-size */}
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-body-primary leading-tight  text-center sm:text-left">
        Bài viết liên quan
      </span>

      <div className="w-full" ref={divRef}>
        <Swiper slidesPerView={getSlidesPerView()} spaceBetween={16}>
          {data?.map((item, index) => (
            <SwiperSlide key={index} className="w-full">
              <Card data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsSlider;
