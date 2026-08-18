import axiosInstance from "@/api/axiosInstance";

export async function register(obj) {
  const data = await axiosInstance.post("/auth/signup", obj);
  console.log(data);
  return data;
}
