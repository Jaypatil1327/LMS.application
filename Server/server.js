import { config } from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

config();

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = cors({
  origin: process.env.CLIENT_URL,
  methods: ["PUT", "POST", "GET", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.use(express.json());
app.use(cors(corsOptions));

// database connection
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("connected to database"))
  .catch((e) => console.log(e));

// route configuration

app.listen(port, () => {
  console.log("connected to server successfully");
});
