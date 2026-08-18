import bcryptjs from "bcryptjs";
import { config } from "dotenv";

config();

export async function hashPassword(pass) {
  const salt = parseInt(process.env.SALT);
  const hash = await bcryptjs.hash(pass, salt);
  return hash;
}

export async function decodePassword(pass, hashPassword) {
  const status = await bcryptjs.compare(pass, hashPassword);
  return status;
}
