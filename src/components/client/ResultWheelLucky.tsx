import React from "react";

const ResultWheelLucky = ({ item }) => {
  console.log("item ---", item);
  return (
    <div className="flex items-center relative">
      <div className="w-[300px] h-[150px] flex flex-col items-center justify-center bg-white absolute top-[20px] left-[-175px] rounded-[10px] p-[15px]">
        {item ? (
          <span className="fredoka text-[18px] ">
            Món ăn hôm nay sẽ là: {item}
          </span>
        ) : (
          <span className="fredoka text-[18px] ">
            Mời bạn quay vòng quay may mắn để xem hôm nay chúng ta ăn món gì nào ^^
          </span>
        )}
      </div>
      <img src="/assets/character.png" className="w-[500px]" />
    </div>
  );
};

export default ResultWheelLucky;
