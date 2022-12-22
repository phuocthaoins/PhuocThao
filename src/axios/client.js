import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000", // địa chỉ máy chủ
  timeout: 60000, // thời gian cho phép BE phải trả về
});

