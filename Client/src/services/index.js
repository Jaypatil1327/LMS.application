import axiosInstance from "@/api/axiosInstance";

export async function register(obj) {
  const data = await axiosInstance.post("/auth/signup", obj);
  console.log(data);
  return data;
}

export async function login(obj) {
  const { data } = await axiosInstance.post("/auth/signin", obj);
  return data;
}

export async function checkAuthService() {
  const { data } = await axiosInstance.get("/auth/check_auth");
  return data;
}
