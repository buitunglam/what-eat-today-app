'use server'
import { Food } from "../model/Food.model";
import { connectToDb } from "../mongodb";

export const getFoods = async () => {
  try {
    connectToDb();
    const foods = await Food.find({});
    console.log('foods ---', foods)
    return foods;
  } catch (error) {
    // console.log("error --", error)
    return { error: "Something went wrong" };
  }
};

export const createFood = async () => {
  try {
    await connectToDb();
    const example = {
      name: "food 1",
      recipes: "receipts 1",
      img: "",
      typeImage: "medium",
      userId: "123456"
    }
    console.log('example ---', example)
    const food = await Food.create(example);
    console.log('food ---', food)
    return JSON.stringify(food);
  } catch (error) {
    // console.log("error --", error)
    return { error: "Something went wrong" };
  }
}