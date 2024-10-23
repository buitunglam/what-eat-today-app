import { api } from "@/service";
import { FoodType } from "@/types/food";

export const createFoodApi = async (data: FoodType) => {
  const { name, recipes, userId, img, typeImage } = data;
  try {
    const response = await api.post("/api/food", {
      name,
      recipes,
      userId,
      img,
      typeImage,
    });
    console.log("response ---", response);
    return response.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
