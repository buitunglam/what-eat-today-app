"use client";

import ListFood from "@/components/client/ListFood";
import LotteryDom from "@/components/client/LotteryDom";
import React from "react";

const page = () => {
  return (
    <div className="bg-white mt-5 rounded-xl">
      <div className="bg-customBg text-center rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <LotteryDom />
      </div>
      <ListFood />
    </div>
  );
};

export default page;
