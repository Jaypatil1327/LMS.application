import { Router } from "express";
import {
  addNewCourse,
  getAllCourse,
  getCourseById,
  updateCourse,
} from "../controller/course/index.js";
const courseRouter = Router();

courseRouter.post("/create", addNewCourse);
courseRouter.get("/all", getAllCourse);
courseRouter.get("/:id", getCourseById);
courseRouter.post("/update", updateCourse);

export default courseRouter;
