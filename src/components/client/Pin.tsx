"use client";
import { FoodType } from "@/types/food";
import React from "react";

interface ItemFoodType {
  id: string;
  type: string;
  src: string;
}

const Pin = ({ item }: { item: FoodType }) => {
  const { typeImage, imgs, name } = item;
  console.log("item --", item);
  return (
    <div
      className={`cursor-pointer ${typeImage == "small" ? "row-end-[span_10]" : typeImage == "medium" ? "row-end-[span_16]" : "row-end-[span_20]"} bg-slate-600 rounded-[10px] opacity-80 hover:opacity-100 hover:-translate-y-2 duration-300 ease-in-out shadow-md`}
    >
      <img
        src={imgs ? imgs[0] : ""}
        className={"w-full h-full object-cover rounded-[10px]"}
      />
    </div>
  );
};

export default Pin;
