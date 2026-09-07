import { Course } from "../../models/course.js";

const addNewCourse = async (req, res) => {
  try {
    const values = req.body;
    const newlyCreatedCourse = await Course.create({
      instructorName: values.instructorName,
      title: values.title,
      descprition: values.descprition,
      category: values.category,
      level: values.level,
      primaryLanguage: values.primaryLanguage,
      subtitle: values.subtitle,
      pricing: values.pricing,
      objectives: values.objectives,
      welcomeMessage: values.welcomeMessage,
      public_id: values.public_id,
      image: values.image,
      students: [],
      curriculam: [...values.curriculam],
    });
  } catch (error) {}
};

const getAllCourse = async (req, res) => {
  try {
    const listCourse = await Course.find({});
    return res.status(200).json({
      status: true,
      result: listCourse,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      status: false,
    });
  }
};

const updateCourse = async (req, res) => {};

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const courseById = await Course.findById(id);
    if (!courseById) throw new Error("No Data Found");
    return res.status(200).json({
      status: true,
      result: courseById,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

export { addNewCourse, updateCourse, getAllCourse, getCourseById };
