import {
  Action,
  CLEAR_FILTERS,
  SET_FILTER,
  SET_LOADING,
  SET_SEASON,
  SET_SEASONS,
  SET_TOP_SCORERS,
  State,
} from "./apiTypes";

export const initialState: State = {
  loading: true,
  players: {},
  seasons: [],
  selectedSeason: { id: "17328", name: "2020/2021" },
  weightFilter: null,
  goalsFilter: null,
  heightFilter: null,
  nationalityFilter: null,
  teamNameFilter: null,
};

const apiReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_TOP_SCORERS:
      console.log(
        Object.values(action.players).find((p) => p.teamLogo === null)
      );
      return {
        ...state,
        players: action.players,
        loading: false,
        weightFilter: null,
        goalsFilter: null,
        heightFilter: null,
        nationalityFilter: null,
        teamNameFilter: null,
      };
    case SET_SEASONS:
      return { ...state, seasons: action.seasons };
    case SET_SEASON:
      return { ...state, selectedSeason: action.season };
    case SET_FILTER: {
      const key = `${action.key}Filter` as
        | "weightFilter"
        | "goalsFilter"
        | "heightFilter"
        | "nationalityFilter"
        | "teamNameFilter";
      return { ...state, [key]: action.value };
    }
    case SET_LOADING:
      return { ...state, loading: action.loading };
    default: {
      return state;
    }
  }
};

export default apiReducer;
