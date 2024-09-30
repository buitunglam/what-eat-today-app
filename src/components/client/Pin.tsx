"use client";
import React from "react";

interface ItemFoodType {
  id: string;
  type: string;
  src: string;
}

const Pin = ({ item }: { item: ItemFoodType }) => {
  const { type, src } = item;
  console.log("{type, src ----",  type, src)
  return (
    <div
      className={`${type == "small" ? "row-end-[span_10]" : type == "medium" ? "row-end-[span_16]" : "row-end-[span_20]"} bg-slate-600 rounded-[10px]`}
    >
      <img src={src} className={"w-full h-full object-cover rounded-[10px]"} />
    </div>
  );
};

export default Pin;
