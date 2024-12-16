import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dievole7:xHiH4QqucUmFMIv9@cluster0.al426.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
