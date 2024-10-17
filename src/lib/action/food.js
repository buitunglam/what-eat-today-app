'use server'
import { Food } from "../model/Food.model";
import { connectToDb } from "../mongodb";

export const getFoods = async () => {
  try {
    connectToDb();
    const foods = await Food.find();
    console.log('foods ---', foods)
    return foods;
  } catch (error) {
    // console.log("error --", error)
    return { error: "Something went wrong" };
  }
};

export const createFood = async () => {
  try {
    connectToDb();
    const example = {
      name: "food 1",
      receipt: "receipts 1",
      img: "",
      typeImage: "small",
      userId: "123456"
    }
    const food = await Food.create(example);
    console.log('food ---', food)
    return food;
  } catch (error) {
    // console.log("error --", error)
    return { error: "Something went wrong" };
  }
}