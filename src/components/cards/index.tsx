/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { FC } from "react";
import moment from "moment";
import { Iconly } from "react-iconly";
import Calendar from "@/src/assets/static/icon/Calendar.png";
import Clock from "@/src/assets/static/icon/Clock.png";
import LazyImage from "../lazy/LazyImage";
import { useRouter } from "next/navigation";

interface CardProps {
  data?: any;
}

const Card: FC<CardProps> = ({ data }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/resources/news/${data?.slug}`);
  };

  return (
    <div
      className="flex flex-col w-full gap-4 sm:gap-6"
      onClick={handleNavigate}
    >
      {/* Hình ảnh */}
      <div className="relative w-full aspect-[505/405]">
        <LazyImage
          src={data?.image_url}
          alt="Foso Icon"
          className="w-full aspect-[505/405] lg:rounded-[24px] rounded-[12px]"
        />
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Danh mục */}
        <span className="line-clamp-2 text-body-primary text-sm sm:text-base font-medium px-2 py-1 bg-[#E2F0FE] text-[#0F4F9E] rounded-[8px] w-fit">
          {data?.news_category?.name}
        </span>

        {/* Tiêu đề */}
        <span className="w-full line-clamp-2 text-body-primary text-lg sm:text-xl md:text-2xl font-extrabold leading-[150%]">
          {data?.title}
        </span>

        {/* Thông tin thời gian */}
        <div className="flex flex-row items-center gap-3">
          <div className="text-body-secondary flex flex-row items-center gap-2 text-sm sm:text-base">
            <Image src={Calendar} alt="Foso Icon" width={20} height={20} />
            {moment(data?.created_at).format("DD/MM")}
          </div>
          <div style={{ height: 20, borderLeft: "1px solid #D9E1E7" }}></div>
          <div className="text-body-secondary flex flex-row items-center gap-2 text-sm sm:text-base">
            <Image src={Clock} alt="Foso Icon" width={20} height={20} />
            10 phút đọc
          </div>
        </div>

        {/* Button "Khám phá thêm" */}
        <div className="flex flex-row items-center gap-5 sm:gap-7 text-body-secondary text-sm sm:text-base">
          <span>Khám phá thêm</span>
          <Iconly name="ArrowRight" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Card;
