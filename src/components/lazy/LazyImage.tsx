/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
interface LazyImageProps {
  src: any;
  height?: number | string;
  width?: number | string;
  effect?: "blur";
  alt?: string;
  className?: string;
  style?: object;
  props?: any;
  visibleByDefault?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const LazyImage: FC<LazyImageProps> = ({
  src,
  height,
  width,
  effect = "blur",
  alt,
  className,
  style,
  onClick,
  visibleByDefault = false,
  ...props
}) => {
  return (
    <>
      <LazyLoadImage
        src={src}
        height={height}
        width={width}
        alt={alt}
        effect={effect}
        style={style}
        className={className}
        onClick={onClick}
        visibleByDefault={visibleByDefault}
        {...props}
      />
    </>
  );
};

export default LazyImage;
