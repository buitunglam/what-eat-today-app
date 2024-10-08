import React, { useState } from "react";
import DialogSetFood from "./DialogSetFood";

const ResultWheelLucky = ({ item }) => {
  console.log("item ---", item);
  const [openDialog, setOpenDialog] = useState(false);
  const openDialogSetFood = () => {
    setOpenDialog(true);
  };
  const closeDialogSetFood = () => {
    setOpenDialog(false);
  }

  return (
    <>
      <div className="flex items-center relative max-md:w-full justify-end max-md:mt-[40px]">
        <div className="w-[300px] max-md:w-[180px] max-md:h-[135px] h-[150px] flex flex-col items-center justify-center bg-white absolute top-0 left-[-200px] max-md:left-[5px] rounded-[10px] p-[15px]">
          {item ? (
            <span className="fredoka text-[18px] ">
              Món ăn hôm nay sẽ là: {item} 
              <span
                className="text-blue-400 cursor-pointer"
                onClick={openDialogSetFood}
              >
                {" "}Set 1 (bấm để xem chi tiết)
              </span>
            </span>
          ) : (
            <span className="fredoka text-[18px] ">
              Mời bạn quay vòng quay may mắn để xem hôm nay chúng ta ăn món gì
              nào ^^
            </span>
          )}
        </div>
        <img src="/assets/character.png" className="w-[400px]" />
      </div>
      <DialogSetFood openDialog={openDialog} closeDialogSetFood={closeDialogSetFood} />
    </>
  );
};

export default ResultWheelLucky;
