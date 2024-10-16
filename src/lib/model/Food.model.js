import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    receipt: {
      type: String,
      require: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      require: true,
    },
  },
  {
    collection: "foods",
    timestamps: true,
  }
);

export const Food = mongoose.models?.Food || mongoose.model("Food", foodSchema);
