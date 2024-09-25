"use client";

import LotteryDom from "@/components/client/LotteryDom";
import React from "react";

const page = () => {
  return (
    <div className="bg-customBg border-red-100">
      <div className="flex justify-center flex-col items-center text-center">
        <LotteryDom />
      </div>
    </div>
  );
};

export default page;
