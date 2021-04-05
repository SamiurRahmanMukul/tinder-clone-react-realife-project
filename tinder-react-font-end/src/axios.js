import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-node-backend.herokuapp.com",
});

export default instance;
