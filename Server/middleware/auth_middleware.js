import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error("Invalid or Token not present");
    const token = authHeader.split(" ")[1];
    const verified_token = jwt.verify(token, process.env.JWT_SECRET);

    return res
      .json({
        data: verified_token,
        status: true,
      })
      .status(200);
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: error.message,
    });
  }
};
