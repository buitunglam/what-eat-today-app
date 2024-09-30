"use client";

import React from "react";
import Pin from "./Pin";

const images = [
  {
    id: "1",
    type: "small",
    src: "/assets/food1.jpg",
  },
  {
    id: "2",
    type: "medium",
    src: "/assets/food2.jpg",
  },
  {
    id: "3",
    type: "large",
    src: "/assets/food3.jpg",
  },
  {
    id: "4",
    type: "small",
    src: "/assets/food1.jpg",
  },
  {
    id: "5",
    type: "medium",
    src: "/assets/food2.jpg",
  },
  {
    id: "6",
    type: "large",
    src: "/assets/food3.jpg",
  },
  {
    id: "7",
    type: "small",
    src: "/assets/food1.jpg",
  },
  {
    id: "8",
    type: "medium",
    src: "/assets/food2.jpg",
  },
  {
    id: "9",
    type: "large",
    src: "/assets/food3.jpg",
  },
];

const ListFood = () => {
  return (
    <div className="mt-[80px]">
      <div className="flex items-center justify-center w-full">
        <h3 className="roboto font-black text-[45px]">
          Chọn món ăn mà bạn yêu thích
        </h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] h-auto auto-rows-[10px] gap-4 mt-[15px]  ">
        {images.map((item) => (
          <Pin item={item} />
        ))}
        {/* <Pin type="medium" />
        <Pin type="large" />
        <Pin type="small" />
        <Pin type="medium" />
        <Pin type="large" />
        <Pin type="small" />
        <Pin type="medium" />
        <Pin type="large" />
        <Pin type="small" />
        <Pin type="medium" />
        <Pin type="large" /> */}
      </div>
    </div>
  );
};

export default ListFood;
