import { Food } from "../model/Food.model";
import { connectToDb } from "../mongodb";

export const getFoods = async () => {
  try {
    connectToDb();
    const foods = await Food.find();
    console.log('foods ---', foods)
    return foods;
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
