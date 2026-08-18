import { decodePassword, hashPassword } from "../../libs/hash_password.js";
import { User } from "../../models/user.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export async function signup(req, res) {
  try {
    const { name, email, password, role } = req.body;

    const newlyCreatedUser = await User.create({
      name,
      email,
      password: await hashPassword(password),
      role: role || "user",
    });

    res.status(200).json({
      success: true,
      data: newlyCreatedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

export async function signin(req, res) {
  try {
    console.log("request received");
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email: email });
    if (checkUser && decodePassword(password, checkUser.password)) {
      const access_token = jwt.sign(
        {
          _id: checkUser._id,
          name: checkUser.name,
          email: checkUser.email,
          role: checkUser.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "20m" },
      );
      return res.status(200).json({
        data: {
          access_token: access_token,
          _id: checkUser._id,
          name: checkUser.name,
          email: checkUser.email,
          role: checkUser.role,
        },
        status: true,
        message: "login success",
      });
    } else throw new Error("User does not exist");
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
}
