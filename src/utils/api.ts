import axios from "axios"

export const API = async () => {
  const params = {
    api_token: "ourTPJX27PRApd0Od5mjhMS8NRlX7ou4VFx9ub2ToRkffz0LTgNMQNC04wyv",
  }

  return axios.create({
    baseURL: "https://soccer.sportmonks.com/api/v2.0/",
    params,
  })
}
