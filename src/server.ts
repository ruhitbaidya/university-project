import mongoose from "mongoose";
import app from "./app";
import { config } from "./app/config/config";

const dbConnect = async () => {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(config.port, () => {
      console.log(`Your Database And Server Connected`);
    });
  } catch (err) {
    console.error(err);
  }
};

dbConnect();
