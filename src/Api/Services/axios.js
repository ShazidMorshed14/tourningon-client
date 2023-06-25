import axios from "axios";

export default (baseURL = process.env.REACT_APP_BASE_URL) => {
  const instance = axios.create({
    baseURL,
  });
};
