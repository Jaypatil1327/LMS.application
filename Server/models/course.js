import mongoose, { Mongoose } from "mongoose";

const curriculamSchema = new Mongoose.Schema({
  title: String,
  publicId: String,
  videoUrl: String,
  freePreview: Boolean,
});

const CourseSchema = new mongoose.Schema({
  instructorName: String,
  data: Date,
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

module.exports = mongoose.model("Course", CourseSchema);
