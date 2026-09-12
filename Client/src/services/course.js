import axiosInstance from "@/api/axiosInstance";

export async function courseUpload(vals) {
  const result = await axiosInstance.post("/course/create", vals);
  return result;
}
