import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    recipes: {
      type: String,
      require: true,
    },
    imgs: {
      type: [String],
    },
    typeImage: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
  },
  {
    collection: "food",
    timestamps: true,
  }
);

export const Food = mongoose.models?.Food || mongoose.model("Food", foodSchema);
