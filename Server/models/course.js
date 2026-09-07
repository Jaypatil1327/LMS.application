import mongoose from "mongoose";

const curriculamSchema = new mongoose.Schema({
  title: String,
  publicId: String,
  videoUrl: String,
  freePreview: Boolean,
});

const CourseSchema = mongoose.Schema({
  instructorName: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  title: String,
  category: String,
  level: String,
  primaryLanguage: String,
  subtitle: String,
  description: String,
  pricing: Number,
  objectives: String,
  welcomeMessage: String,
  public_id: String,
  image: String,
  students: [
    {
      student_id: String,
      student_name: String,
      student_email: String,
    },
  ],
  curriculam: [curriculamSchema],
});

export const Course = mongoose.model("Course", CourseSchema);
