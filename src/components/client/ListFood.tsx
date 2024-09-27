"use client";

import React from "react";
import Pin from "./Pin";

const images = [
  "/assets/logo.png",
  "/assets/logo.png",
  "/assets/logo.png",
  "/assets/logo.png",
  "/assets/logo.png",
  "/assets/logo.png",
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
        <Pin type="small" />
        <Pin type="medium" />
        <Pin type="large" />
        <Pin type="small" />
        <Pin type="medium" />
        <Pin type="large" />
        <Pin type="small" />
        <Pin type="medium" />
        <Pin type="large" />
        <Pin type="small" />
        <Pin type="medium" />
        <Pin type="large" />
      </div>
    </div>
  );
};

export default ListFood;
