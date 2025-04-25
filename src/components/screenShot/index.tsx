"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";

// Hình ảnh mockup ứng dụng
import home from "@/public/assets/image/home.png";
import tide from "@/public/assets/image/tide.png";
import days from "@/public/assets/image/days.png";
import hours from "@/public/assets/image/hours.png";

const images = [
  { src: home, caption: "Màn hình chính" },
  { src: tide, caption: "Bản tin thủy triều" },
  { src: days, caption: "Dự báo 7 ngày" },
  { src: hours, caption: "Dự báo theo giờ" },
];

export default function AppScreenshotsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#E0F2FF] to-white relative overflow-hidden">
      {/* Blurred blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#015C9F]/30 rounded-full filter blur-3xl opacity-70 -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00B4DB]/20 rounded-full filter blur-2xl opacity-60 -z-10 animate-pulse" />

      {/* Title */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Hình ảnh thực tế từ ứng dụng{" "}
          <span className="text-[#015C9F]">MeteoViet</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 mt-2">
          Giao diện trực quan, thân thiện – trải nghiệm dễ dàng trên mọi thiết
          bị.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 120,
              modifier: 1.2,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1280: {
                slidesPerView: 2.5,
              },
            }}
            modules={[Autoplay, EffectCoverflow]}
          >
            {images.map(({ src, caption }, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center transition-transform duration-300"
              >
                <div className="relative flex items-center justify-center flex-col">
                  <Image
                    src={src}
                    alt={`Screenshot ${index}`}
                    className="w-full max-w-[180px] md:max-w-[220px] h-auto"
                    width={220}
                    height={450}
                  />
                  {/* Shadow dưới điện thoại */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[140%] h-6 bg-black/5 rounded-full blur-xl z-[-1]" />
                </div>
                <p className="mt-4 text-sm text-gray-500 text-center">
                  {caption}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
