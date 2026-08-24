import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadMediaToCloudinary = async (file) => {
  try {
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
        },
        (error, data) => {
          if (error) reject(error);
          else resolve(data);
        },
      );
      stream.end(file.buffer);
    });

    return result;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

const deleteMediaFromCloudinary = async (public_id) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

export { uploadMediaToCloudinary, deleteMediaFromCloudinary };
