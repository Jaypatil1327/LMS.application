import axiosInstance from "@/api/axiosInstance";

export async function videoUpload(video) {
  try {
    const { data } = await axiosInstance.post("/media/upload", video);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
