//Source: https://daily.dev/blog/a-guide-to-writing-clean-api-calls-using-axios

import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
