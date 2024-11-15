"use client";
import { FoodType } from "@/types/food";
import { useRouter } from "next/navigation";
import React from "react";

interface ItemFoodType {
  id: string;
  type: string;
  src: string;
}

const FoodItem = ({ item }: { item: FoodType }) => {
  const route = useRouter();
  const { typeImage, imgs, name, _id } = item;
  const onNavigateToDetails = () => {
    route.push(`/food/${_id?.toString()}`)
  }
  return (
    <div
    onClick={onNavigateToDetails}
      className={`w-[30%] max-md:w-[45%] 
        max-sm:w-[100%]
        cursor-pointer ${typeImage == "small" ? "row-end-[span_10]" : typeImage == "medium" ? "row-end-[span_16]" : "row-end-[span_20]"} hover:opacity-100 hover:-translate-y-2 duration-300 ease-in-out`}
    >
      <img
        src={imgs ? imgs[0] : ""}
        className={"w-full h-[200px] mb-[5px] object-cover rounded-[10px]"}
      />
      {name ? (
        <span className={"text-black text-[20px] break-all fredoka"}>
          {name}
        </span>
      ) : null}
    </div>
  );
};

export default FoodItem;
