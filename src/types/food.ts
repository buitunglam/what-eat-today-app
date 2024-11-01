export interface FoodType {
  name: string;
  userId: string;
  recipes: string;
  imgs?: [string];
  typeImage: string;
}

export interface DataFoodInput {
  name: string;
  userId: string;
  recipes: string;
  fileImgs?: [any];
  typeImage: string;
}

interface CloudinaryResource {
  context?: {
    alt?: string;
    caption?: string;
  };
  public_id: string;
  secure_url: string;
}