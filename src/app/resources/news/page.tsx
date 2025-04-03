"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Breadcrumbs from "@/src/components/breadcrums";
import Card from "@/src/components/cards";
import Pagination from "@/src/components/pagination";
import SearchBox from "@/src/components/input";
import SideBanner from "@/src/components/sidebar/banner";
import SideCategory from "@/src/components/sidebar/category";
import TextReveal from "@/src/components/fadeInText";

// Assets
import ArrowIco from "@/src/assets/static/icon/ArrowIco.png";
import leftIco from "@/src/assets/static/icon/leftIco.png";
import rightIco from "@/src/assets/static/icon/rightIco.png";
import joinNow from "@/public/assets/image/joinNow.png";
import sideBanner1 from "@/public/assets/image/sideBanner1.png";
import sideBanner2 from "@/public/assets/image/sideBanner2.png";

// Data
import { data } from "./helper";

const ITEMS_PER_PAGE = 8;

const News = () => {
  // State
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Initialize AOS (Animation on Scroll)
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="relative mt-4 lg:mt-18">
      {/* Background decorations */}
      <div className="absolute top-[340px] left-[-161px] hidden rounded-full lg:block decorate z-[-1]"></div>
      <div className="absolute top-[2670px] right-[-281px] rounded-full decorate z-[-1]"></div>

      <div className="flex flex-col items-center gap-4 lg:gap-24">
        {/* Header Section */}
        <div className="z-10 flex w-full items-center justify-center px-6 md:px-10 lg:justify-between">
          <Image
            src={leftIco}
            alt="Left Icon"
            className="hidden w-[195px] h-auto lg:block"
            data-aos="fade-right"
          />

          {/* Title & Description */}
          <div className="flex flex-col items-center gap-6 text-center lg:text-left">
            <Breadcrumbs className={"justify-center"} />
            <h1 className="text-4xl font-extrabold text-body-primary lg:text-6xl">
              Blog{" "}
              <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                FOSO
              </span>{" "}
              –
            </h1>
            <h2 className="relative text-4xl font-extrabold text-body-primary lg:text-6xl">
              Cập Nhật Tin Tức{" "}
              <span className="relative inline-block">
                Mới Nhất
                <span className="absolute bottom-2 left-0 z-[-1] h-7 w-full rounded-full bg-[#A3EED6]"></span>
              </span>
            </h2>
            <TextReveal className="truncate text-lg text-[#33404A] lg:text-2xl">
              Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
            </TextReveal>
          </div>

          <Image
            src={rightIco}
            alt="Right Icon"
            className="hidden w-[195px] h-auto lg:block"
            data-aos="fade-left"
          />
        </div>

        {/* Main Content Section */}
        <div className="relative flex w-full flex-col lg:flex-row gap-8 px-4 md:px-10 lg:px-20 xl:px-40">
          {/* Main Blog Content */}
          <div className="flex w-full flex-col gap-6">
            <h2 className="hidden text-4xl font-extrabold text-body-primary lg:block">
              Tất cả bài viết
            </h2>

            {/* Banner Image */}
            <div className="relative w-full aspect-[1042/318]">
              <Image
                src={joinNow}
                alt="Join Now"
                fill
                className="rounded-[12px] object-cover lg:rounded-[40px]"
              />
              <div className="absolute left-4 flex h-full w-1/2 flex-col justify-center lg:left-12">
                <TextReveal className="text-white text-xl font-semibold sm:text-2xl lg:text-4xl flex-wrap">
                  Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
                </TextReveal>
                <button
                  data-aos="fade-up"
                  className="mt-4 flex w-fit items-center gap-3 rounded-full border border-white bg-transparent px-4 py-2 text-white lg:gap-6 lg:px-6 lg:py-3"
                >
                  Tham gia ngay{" "}
                  <Image
                    src={ArrowIco}
                    alt="Arrow Icon"
                    width={12}
                    height={12}
                  />
                </button>
              </div>
            </div>

            {/* Blog List */}
            <div className="flex flex-col items-center gap-18">
              <div className="grid gap-8 md:grid-cols-2">
                {paginatedData.map((item, index) => (
                  <Card key={index} data={item} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                totalItems={data.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="sticky top-10 hidden h-fit w-2/5 flex-col items-center gap-6 lg:flex">
            <h2 className="text-4xl font-extrabold text-body-primary">
              Tìm kiếm
            </h2>
            <SearchBox />
            <SideCategory />
            <SideBanner img={sideBanner1.src} title={"Trải nghiệm ngay"} />
            <SideBanner img={sideBanner2.src} title={"Tham gia ngay"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
