import axios from "axios";

// make easy request without URL copypasting.
// make post get delete put requests.
// send jwt automaically

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    "Content-Type": "applicatttion/json",
  };
  const baseURL = "http://127.0.0.1:8000/api/v1";
  const fullURL = `${baseURL}${path}`;
  if (method === "get" || method === "delee") {
    return axios[method](fullURL, { headers });
  } else {
    return axios[method](fullURL, data, { headers });
  }
};

export const createAccoubn = form => callApi("post", "/users/", form);
