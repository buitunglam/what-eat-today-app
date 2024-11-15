"use server";
import { DataFoodInput } from "@/types/food";
import { Food } from "../model/Food.model";
import { connectToDb } from "../mongodb";
// import {DataFoodInput} from  "@/types/food";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getFoods = async () => {
  try {
    connectToDb();
    const foods = await Food.find({});
    // console.log("foods ---", foods);
    return JSON.stringify(foods);
  } catch (error) {
    // console.log("error --", error)
    return { error: "Something went wrong" };
  }
};

export const getFoodDetails = async (id: string) => {
  try {
    connectToDb();
    console.log("id --", id);
    const foodDetails = await Food.findById({ _id: id });
    return foodDetails;
  } catch (error) {
    console.log("error --", error);
    return { error: "Something went wrong" };
  }
};
