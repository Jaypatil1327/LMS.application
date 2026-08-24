import { config } from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./router/authRouter.js";
import mediaRouter from "./router/instructorRouter.js";

config();

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = cors({
  origin: process.env.CLIENT_URL,
  methods: ["PUT", "POST", "GET", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
// database connection

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("connected to database"))
  .catch((e) => console.log(e));

// route configuration

app.use(express.json());
app.use(corsOptions);

app.use("/auth", authRouter);
app.use("/media", mediaRouter);

app.listen(port, () => {
  console.log("connected to server successfully");
});
