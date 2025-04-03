/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import LazyImage from "../../lazy/LazyImage";

interface ImageProps {
  src?: any;
  title?: string;
}

const ResponsiveImage: FC<ImageProps> = ({ src, title }) => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <LazyImage src={src} alt={title} className="w-full h-auto max-w-full" />
      {title && (
        <span className="text-xs md:text-sm lg:text-base text-body-secondary text-center mt-2">
          {title}
        </span>
      )}
    </div>
  );
};

export default ResponsiveImage;
