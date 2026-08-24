import { Router } from "express";
import multer from "multer";
import {
  deleteMediaFromCloudinary,
  uploadMediaToCloudinary,
} from "../helper/mediaUpload.js";

const mediaRouter = Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

mediaRouter.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const response = await uploadMediaToCloudinary(req.file);
    return res.status(200).json({
      status: true,
      result: response,
      message: "file uploaded successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      status: false,
      message: "unable to upload file try again later!!",
    });
  }
});

mediaRouter.post("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("id must present to delete file");
    const response = await deleteMediaFromCloudinary(id);
    return res.status(200).json({
      status: true,
      message: "file deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      status: false,
      message: "unable to delete file try again later!!",
    });
  }
});

export default mediaRouter;
