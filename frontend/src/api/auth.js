import axiosClient from "./axios";

export function registerUser(username, password) {
  return axiosClient.post("/auth/register", {
    username: username,
    password: password,
  });
}

export function loginUser(username, password) {
  return axiosClient.post("/auth/login", {
    username: username,
    password: password,
  });
}
