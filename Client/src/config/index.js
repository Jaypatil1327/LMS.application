import { Select } from "@/components/ui/select";
import { Input } from "../components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const signin = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your e-mail",
    component: Input,
    type: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    component: Input,
    type: "input",
  },
];

export const signup = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    component: Input,
    type: "input",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your e-mail",
    component: Input,
    type: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    component: Input,
    type: "input",
  },
];

export const languageOptions = [
  { id: "english", label: "English" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "german", label: "German" },
  { id: "chinese", label: "Chinese" },
  { id: "japanese", label: "Japanese" },
  { id: "korean", label: "Korean" },
  { id: "portuguese", label: "Portuguese" },
  { id: "arabic", label: "Arabic" },
  { id: "russian", label: "Russian" },
];

export const courseLevelOptions = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

export const courseCategories = [
  { id: "web-development", label: "Web Development" },
  { id: "backend-development", label: "Backend Development" },
  { id: "data-science", label: "Data Science" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "artificial-intelligence", label: "Artificial Intelligence" },
  { id: "cloud-computing", label: "Cloud Computing" },
  { id: "cyber-security", label: "Cyber Security" },
  { id: "mobile-development", label: "Mobile Development" },
  { id: "game-development", label: "Game Development" },
  { id: "software-engineering", label: "Software Engineering" },
];

export const courseLandingPageFormControls = [
  {
    name: "title",
    label: "Title",
    component: Input,
    type: "text",
    placeholder: "Enter course title",
  },
  {
    name: "category",
    label: "Category",
    component: Select,
    type: "select",
    placeholder: "Select Category",
    options: courseCategories,
  },
  {
    name: "level",
    label: "Level",
    component: Select,
    type: "select",
    placeholder: "Select Course Level",
    options: courseLevelOptions,
  },
  {
    name: "primaryLanguage",
    label: "Primary Language",
    component: Select,
    type: "select",
    placeholder: "Select Language",
    options: languageOptions,
  },
  {
    name: "subtitle",
    label: "Subtitle",
    component: Select,
    type: "select",
    placeholder: "select course subtitle",
    options: languageOptions,
  },
  {
    name: "description",
    label: "Description",
    component: Textarea,
    type: "text",
    placeholder: "Enter course description",
  },
  {
    name: "pricing",
    label: "Pricing",
    component: Input,
    type: "number",
    placeholder: "Enter course pricing",
  },
  {
    name: "objectives",
    label: "Objectives",
    component: Textarea,
    type: "text",
    placeholder: "Enter course objectives",
  },
  {
    name: "welcomeMessage",
    label: "Welcome Message",
    component: Textarea,
    placeholder: "Welcome message for students",
  },
];

export const courseLandingInitialFormData = {
  title: "",
  category: "",
  level: "",
  primaryLanguage: "",
  subtitle: "",
  description: "",
  pricing: "",
  objectives: "",
  welcomeMessage: "",
  image: "",
};
