"use client";

import React, { useState } from "react";
import emoji1 from "@/src/assets/static/icon/emoji1.png";
import emoji2 from "@/src/assets/static/icon/emoji2.png";
import emoji3 from "@/src/assets/static/icon/emoji3.png";
import emoji4 from "@/src/assets/static/icon/emoji4.png";
import emoji5 from "@/src/assets/static/icon/emoji5.png";
import emoji6 from "@/src/assets/static/icon/emoji6.png";
import Image from "next/image";

const Review = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const ratings = [
    { id: 1, title: "Hữu ích", ratings: 1, ico: emoji1?.src },
    { id: 2, title: "Yêu thích", ratings: 2, ico: emoji2?.src },
    { id: 3, title: "Thú vị", ratings: 0, ico: emoji3?.src },
    { id: 4, title: "Bất ngờ", ratings: 1, ico: emoji4?.src },
    { id: 5, title: "Nhàm chán", ratings: 0, ico: emoji5?.src },
    { id: 6, title: "Tức giận", ratings: 0, ico: emoji6?.src },
  ];

  return (
    <div
      className="w-full bg-[#FFFFFF] rounded-3xl flex flex-col items-center justify-center gap-6 py-3 lg:py-6 mt-6 lg:mt-18 "
      style={{ boxShadow: "0px 1px 2px 0px #1212170F" }}
    >
      {/* Tiêu đề */}
      <div className="flex flex-col gap-1 justify-center items-center">
        <span className="body-xLarge-medium lg:body-xxLarge-medium font-extrabold text-body-primary">
          Bạn thấy bài viết như thế nào?
        </span>
        <span className="body-medium-medium lg:body-large-medium text-body-primary">
          4 phản hồi
        </span>
      </div>

      {/* Danh sách rating (Grid Layout) */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 px-15 lg:px-25">
        {ratings.map((rating) => {
          const isSelected = selectedRating === rating.id;

          return (
            <button
              key={rating.id}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-2 lg:px-5 rounded-xl border ${
                isSelected
                  ? "border-[#10805B] text-[#10805B]"
                  : "border-transparent text-body-secondary"
              } transition-all duration-200`}
              onClick={() => setSelectedRating(rating.id)}
            >
              <Image
                src={rating.ico}
                width={24}
                height={24}
                alt="emoji"
                className="lg:h-[48px] lg:w-[48px]"
              />
              <span className="body-medium-medium lg:body-large-medium font-bold">
                {rating.ratings}
              </span>
              <span className="body-medium-medium lg:body-large-medium">
                {rating.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
