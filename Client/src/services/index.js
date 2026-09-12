import axiosInstance from "@/api/axiosInstance";

export async function register(obj) {
  const data = await axiosInstance.post("/auth/signup", obj);
  console.log(data);
  return data;
}

export async function login(obj) {
  try {
    const { data } = await axiosInstance.post("/auth/signin", obj);
    return data;
  } catch (error) {
    return null;
  }
}

export async function checkAuthService() {
  try {
    const { data } = await axiosInstance.get("/auth/check_auth");
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
