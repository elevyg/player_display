import { Beer } from "../types/Beer"
import { API } from "../utils/api"
import { Dispatch, GET_BEER_LIST } from "./beerTypes"

export const getBeerList = async (dispatch: Dispatch) => {
  const api = await API()
  const response = await api.get("beers", { params: { hasLabels: "Y" } })

  const payload = response.data.data.reduce(
    (acc: Record<string, Beer>, curr: Beer) => ({ ...acc, [curr.id]: curr }),
    {}
  )

  return dispatch({ type: GET_BEER_LIST, payload })
}
