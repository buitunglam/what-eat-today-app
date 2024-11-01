"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { getFoods } from "@/lib/action/food";
import Pin from "@/components/client/Pin";
import FoodItem from "@/components/client/FoodItem";

const page = () => {
  const [listFoods, setListFoods] = React.useState<any[] | null>(null);

  React.useEffect(() => {
    getListFood();
  }, []);

  const getListFood = async () => {
    try {
      // const listFoods: any = (await getFoods()) || [];
      const response: any = await fetch("/api/food", {
        method: "GET",
      });
      const data = await response.json();
      const listFoods = JSON.parse(data.data);
      setListFoods(listFoods);
    } catch (error) {
      console.log("error --", error);
    }
  };

  return (
    <div className="bg-white mt-5 rounded-xl overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <Typography variant="h4" className="fredoka">
          List Foods
        </Typography>
        {/* <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] h-auto auto-rows-[10px] gap-4 mt-[15px]  "> */}
        <div className="flex items-center flex-wrap gap-5 w-full mt-[30px]">
          {listFoods && listFoods.length > 0
            ? listFoods.map((item: any, index: any) => (
                <FoodItem item={item} key={index} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default page;
