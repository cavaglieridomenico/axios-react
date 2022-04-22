import axios from "axios";

const getProducts = axios.create({
  baseURL: "https://course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default getProducts;
