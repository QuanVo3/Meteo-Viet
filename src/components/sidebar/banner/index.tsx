/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { FC } from "react"; // React & TypeScript
import Image from "next/image"; // Next.js Image component

// Import components
import LazyImage from "../../lazy/LazyImage";

// Import assets
import ArrowIco from "@/src/assets/static/icon/ArrowIco.png";

// Define props interface
interface SideBannerProps {
  img?: any; // Hình ảnh có thể là bất kỳ kiểu dữ liệu nào
  title?: string; // Tiêu đề hiển thị trên banner
}

/**
 * SideBanner Component
 * Hiển thị một banner với hình ảnh, tiêu đề và icon mũi tên.
 */
const SideBanner: FC<SideBannerProps> = (props) => {
  // Destructure props
  const { img, title } = props;

  return (
    <div className="relative w-full rounded-3xl">
      {/* Hình ảnh nền với Lazy Load */}
      <LazyImage
        src={img}
        height={"auto"}
        width={"100%"}
        className="rounded-3xl object-cover"
      />

      {/* Overlay chứa tiêu đề và icon */}
      <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-end px-6 py-14">
        <div className="flex items-center justify-between rounded-full border px-6 py-3.5">
          <span className="body-medium-bold text-white">{title}</span>
          <Image src={ArrowIco} alt="Arrow Icon" width={12} height={12} />
        </div>
      </div>
    </div>
  );
};

export default SideBanner;
