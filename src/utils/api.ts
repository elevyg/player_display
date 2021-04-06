import axios from "axios";

export const API = async () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const params = {
    api_token: API_KEY,
  };

  return axios.create({
    baseURL: "https://soccer.sportmonks.com/api/v2.0/",
    params,
  });
};
