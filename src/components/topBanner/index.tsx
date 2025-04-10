"use client";

import Image from "next/image";
import rectangle from "@/src/assets/static/background/Rectangle.png";
import screenShot from "../../../public/assets/image/screeenShot.png";
import TextReveal from "../fadeInText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

const TopBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 50, // Offset before the animation triggers
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center p-6 relative">
      {/* Background for Mobile */}
      <div
        className=" aspect-[2860/5632] w-1/2 md:hidden relative z-20"
        data-aos="fade-left"
      >
        <Image
          src={screenShot.src}
          alt="Phone Screenshot"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute"
        />
      </div>
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center opacity-20 aspect-[1768/2504] w-full "
        style={{ backgroundImage: `url(${rectangle.src})` }}
      ></div>

      {/* Left Section - Content */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left relative z-10 mt-10 md:mt-0"
        data-aos="fade-up"
      >
        <span className="font-banner text-5xl font-bold text-blue-600">
          METEOVIET
        </span>
        <span className="font-base text-lg font-medium mt-6 text-body-primary">
          Kết Nối Dữ Liệu, Dự Báo Chính Xác, Chủ Động Tương Lai
        </span>

        <TextReveal className="mt-1 text-body-secondary font-base body-large-regular flex-wrap text-center md:text-left flex justify-center items-center md:justify-start">
          Giải pháp dự báo thời tiết & khí tượng thủy văn hiện đại, giúp bạn nắm
          bắt thông tin nhanh chóng và chính xác.
        </TextReveal>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button
            className="px-6 py-3 bg-blue-600 text-white shadow-md rounded-full body-large-medium transition-all duration-300 transform hover:bg-blue-700 hover:scale-105 font-base"
            onClick={() =>
              window.open("https://zalo.me/4417416028415695579", "_blank")
            }
          >
            Trải nghiệm ngay
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 shadow-md rounded-full body-large-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 font-base">
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

      {/* Right Section - Phone Image */}
      <div className="hidden md:w-1/2 relative aspect-[1768/2504] md:flex items-center justify-center">
        <Image
          src={rectangle.src}
          alt="Phone Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute aspect-[2860/5632] w-1/2" data-aos="fade-left">
          <Image
            src={screenShot.src}
            alt="Phone Screenshot"
            layout="fill"
            objectFit="cover"
            priority
            className="absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
