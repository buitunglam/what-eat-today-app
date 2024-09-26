import React from "react";

const ResultWheelLucky = () => {
  return (
    <div className="flex items-center relative">
      <div className="w-[300px] h-[150px] flex flex-col items-center justify-center bg-white absolute top-[20px] left-[-175px] rounded-[10px] p-[15px]">
        <span className="fredoka text-[18px] ">
          Món ăn hôm nay sẽ là: đậu sốt cà chua, canh cà chua thịt
        </span>
      </div>
      <img src="/assets/character.png" className="w-[500px]" />
    </div>
  );
};

export default ResultWheelLucky;
