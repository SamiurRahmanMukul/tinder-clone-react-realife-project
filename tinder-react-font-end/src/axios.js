import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8008",
});

export default instance;
