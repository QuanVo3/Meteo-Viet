"use client";

import Image from "next/image";
import heroBg from "@/src/assets/static/background/HeroSection.png";
import screenShot from "../../../public/assets/image/screenShot.png";
import TextReveal from "../fadeInText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

const TopBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full bg-cover bg-center bg-no-repeat text-white">
      {/* Background image */}
      <Image
        src={heroBg.src}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      {/* Overlay to enhance text contrast */}
      <div className="absolute inset-0 bg-[#0063AE]/75 z-10" />

      <div className="relative z-20 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center p-6 md:py-24 ">
        {/* Left section */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left"
          data-aos="fade-right"
        >
          <div
            className="md:hidden flex md:w-1/2 justify-center items-center mt-20 md:mt-0"
            data-aos="fade-left"
          >
            <div className="relative w-1/2 aspect-[1464/2978]">
              <Image
                src={screenShot.src}
                alt="Phone Screenshot"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <span className="font-banner text-4xl md:text-5xl font-extrabold text-white hidden md:flex">
            MeteoViet
          </span>

          <span className="font-base text-xl md:text-2xl font-semibold mt-4 text-white flex-wrap">
            Kết Nối Dữ Liệu, Dự Báo Chính Xác,
            <br /> Chủ Động Tương Lai
          </span>

          <TextReveal className="mt-3 text-white font-base text-base md:text-lg max-w-xl mx-auto md:mx-0 flex-wrap">
            Giải pháp dự báo thời tiết & khí tượng thủy văn hiện đại, giúp bạn
            nắm bắt thông tin nhanh chóng và chính xác.
          </TextReveal>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button
              className="px-6 py-3 bg-white text-[#0063AE] shadow-lg rounded-full font-semibold transition-all duration-300 transform hover:bg-gray-100 hover:scale-105"
              onClick={() =>
                window.open("https://zalo.me/4417416028415695579", "_blank")
              }
            >
              Trải nghiệm ngay
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-[#0063AE] hover:scale-105">
              <Link
                to="guide"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Hướng dẫn
              </Link>
            </button>
          </div>
        </div>

        {/* Right section */}
        <div
          className="hidden md:flex md:w-1/2 justify-center items-center mt-10 md:mt-0 
          
          "
          data-aos="fade-left"
        >
          <div className="relative w-[260px] aspect-[1464/2978]">
            <Image
              src={screenShot.src}
              alt="Phone Screenshot"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
