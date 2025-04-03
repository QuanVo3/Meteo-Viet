import React from "react";
import { data } from "./helper";

const SideCategory = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {data?.map((cate, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="body-xLarge-medium text-body-primary">{cate?.title}</span>
          <span className="body-xLarge-medium text-body-secondary" >{cate?.articles}</span>
        </div>
      ))}
    </div>
  );
};

export default SideCategory;
