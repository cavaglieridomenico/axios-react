import axios from "axios";

const getData = axios.create({
  baseURL: "https://course-api.com",
});

getData.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    console.log("request sent");
    // must return request
    return request;
  },
  (error) => {
    console.log("request error");
    return Promise.reject(error);
  }
);

getData.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);

export default getData;
