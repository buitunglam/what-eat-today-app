import { api } from "@/service";
import { FoodType } from "@/types/food";

export const createFoodApi = async (data: FoodType) => {
  const { name, recipes, userId, imgs, typeImage } = data;
  try {
    const response = await api.post("/api/food", {
      name,
      recipes,
      userId,
      imgs,
      typeImage,
    });
    console.log("response ---", response);
    return response.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
