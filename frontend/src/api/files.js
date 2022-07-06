import axiosClient from "./axios";

export function uploadFiles(formData) {
  return axiosClient.post("/api/files", formData);
}
