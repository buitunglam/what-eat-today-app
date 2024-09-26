import React from "react";
import StackGrid from "react-stack-grid";

const ListFood = () => {
  return (
    <div className="border-2 mt-[80px]">
      <div className="flex items-center justify-center w-full">
        <h3 className="roboto font-black text-[45px]">
          Chọn món ăn mà bạn yêu thích
        </h3>
      </div>
      <StackGrid
        columnWidth={550}
        // columnWidth={width <= 768 ? "100%" : "33.33%"}
      >
        <div key="key1" className="text-black">
          Item 1
        </div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
      </StackGrid>
    </div>
  );
};

export default ListFood;
