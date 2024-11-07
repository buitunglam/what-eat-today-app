"use client";

import React from "react";
import Pin from "./Pin";

const ListFood = ({listFoods}) => {
  return (
    <div className="mt-[80px]">
      <div className="flex items-center justify-center w-full">
        <h3 className="roboto font-black text-[45px]">
          Chọn món ăn mà bạn yêu thích
        </h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] h-auto auto-rows-[10px] gap-4 mt-[15px]  ">
        {JSON.parse(listFoods).map((item, index) => (
          <Pin item={item} key={index} />
        ))}
        {/* <Pin type="medium" />
        <Pin type="large" />
        <Pin type="small" />*/}
      </div>
    </div>
  );
};

export default ListFood;
