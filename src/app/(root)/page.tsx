import ListFood from "@/components/client/ListFood";
import LotteryDom from "@/components/client/LotteryDom";
import { getFoods } from "@/lib/action/food";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

const page = async () => {
  const listFoods = (await getFoods()) as string;
  const listFoodForReels = Array.isArray(JSON.parse(listFoods))
    ? JSON.parse(listFoods)?.map((item, index) => {
        return {
          ...item,
          title: item.name,
          background: index % 2 === 0 ? "#f8d384" : "#f9e3bb",
          fonts: [{ text: item.name, top: "18%" }],
        };
      })
    : [];
  // console.log("list product ---", listFoodForReels);
  return (
    // <SignedIn>
      <div className="bg-white mt-5 rounded-xl overflow-hidden">
        <div className="bg-customBg text-center rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <LotteryDom listFoodForReels={JSON.stringify(listFoodForReels)} />
        </div>
        <ListFood listFoods={listFoods} />
      </div>
    // </SignedIn>
  );
};

export default page;
