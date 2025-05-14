import mongoose from "mongoose";
import app from "./app";
import { config } from "./app/config/config";
import { Server } from "http";

let server: Server;
const dbConnect = async () => {
  try {
    await mongoose.connect(config.db_url as string);
    server = app.listen(config.port, () => {
      console.log(`Your Database And Server Connected`);
    });
  } catch (err) {
    console.error(err);
  }
};

dbConnect();

process.on("unhandledRejection", () => {
  console.log("💀 Unhandel Rejection Error In Your Server");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log("💀 Unhacatch Exprection Error In Your Server");
  process.exit(1);
});
