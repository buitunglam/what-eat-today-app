"use client";

import React from "react";
import Pin from "./Pin";

const images = [
  {
    id: "1",
    typeImage: "small",
    img: "/assets/food1.jpg",
    name: "Bún đậu",
    userId: "123456",
    recipes: "This is recipes"
  },
  {
    id: "2",
    typeImage: "medium",
    img: "/assets/food2.jpg",
    name: "Bún đậu",
    userId: "123456",
    recipes: "This is recipes"
  },
  {
    id: "3",
    typeImage: "large",
    img: "/assets/food3.jpg",
    name: "Bún đậu",
    userId: "123456",
    recipes: "This is recipes"
  },
  {
    id: "4",
    typeImage: "small",
    img: "/assets/food1.jpg",
    name: "Bún đậu",
    userId: "123456",
    recipes: "This is recipes"
  },
  {
    id: "5",
    typeImage: "medium",
    img: "/assets/food2.jpg",
    name: "Bún đậu",
    userId: "123456",
    recipes: "This is recipes"
  },
  {
    id: "6",
    typeImage: "large",
    img: "/assets/food3.jpg",
    name: "Bún đậu",
    userId: "123456",
    recipes: "This is recipes"
  },
  {
    id: "7",
    typeImage: "small",
    img: "/assets/food1.jpg",
    name: "Bún đậu",
    userId: "123456",
    recipes: "This is recipes"
  },
  {
    id: "8",
    typeImage: "medium",
    img: "/assets/food2.jpg",
    name: "Bún đậu",
    userId: "123456",
    recipes: "This is recipes"
  },
  {
    id: "9",
    typeImage: "large",
    img: "/assets/food3.jpg",
    name: "Bún đậu",
    userId: "123456",
    recipes: "This is recipes"
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
        {images.map((item, index) => (
          <Pin item={item} key={index} />
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
