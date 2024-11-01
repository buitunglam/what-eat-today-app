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
    console.log("foods ---", foods);
    return foods;
  } catch (error) {
    // console.log("error --", error)
    return { error: "Something went wrong" };
  }
};

export const createFood = async (data: FormData) => {
  try {
    await connectToDb();
    const images = data.get("fileImgs");

    console.log("data ---", data);
    if (images != null) {
      //@ts-ignore
      console.log("imges ---", JSON.parse(images));
    }
    // const dataFile = JSON.parse(data?.fileImgs);

    // // const example = {
    // //   name: "food 1",
    // //   recipes: "receipts 1",
    // //   img: "",
    // //   typeImage: "medium",
    // //   userId: "123456",
    // // };
    // // console.log("example ---", example);
    // console.log("content file ---", dataFile, dataFile[0].contentFile);
    // const imgData = await uploadImageToClound(
    //   data?.fileImgs!![0].contentFile
    // );
    // console.log("img result ---", imgData);
    return;
    const food = await Food.create(data);
    console.log("food ---", food);
    return JSON.stringify(food);
  } catch (error) {
    // console.log("error --", error)
    return { error: "Something went wrong" };
  }
};

const uploadImageToClound = async (file: any) => {
  // const file = files
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: ["foods-upload"],
          upload_preset: "foods-upload",
        },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });
};
