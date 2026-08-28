import axiosInstance from "@/api/axiosInstance";

export async function videoUpload(video, onProgress) {
  try {
    const { data } = await axiosInstance.post("/media/upload", video, {
      onUploadProgress: (progressEvent) => {
        if (!progressEvent.total) return;
        else {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          onProgress?.(progress);
          // its setting value in setProgess if progess exists
        }
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteMedia(id) {
  try {
    const { status } = await axiosInstance.post(`/media/delete/${id}`);
    return status;
  } catch (error) {
    console.log(object);
  }
}
