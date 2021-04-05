import { sliderFilter } from "../utils/sliderFilter";
import {
  Action,
  CLEAR_FILTERS,
  SET_FILTER,
  SET_LOADING,
  SET_SEASON,
  SET_SEASONS,
  SET_TOP_SCORERS,
  State,
  UPDATE_DISPLAYED_PLAYERS,
} from "./apiTypes";

export const initialState: State = {
  loading: true,
  players: {},
  displayedPlayers: [],
  seasons: [],
  selectedSeason: { id: "759", name: "2016/2017" },
  weightFilter: null,
  goalsFilter: null,
  heightFilter: null,
  nationalityFilter: null,
  teamNameFilter: null,
};

const apiReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_TOP_SCORERS:
      return {
        ...state,
        players: action.players,
        displayedPlayers: Object.keys(action.players),
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
      return { ...state, loading: true, selectedSeason: action.season };
    case SET_FILTER: {
      const key = `${action.key}Filter` as
        | "weightFilter"
        | "goalsFilter"
        | "heightFilter"
        | "nationalityFilter"
        | "teamNameFilter";

      return { ...state, [key]: action.value };
    }
    case UPDATE_DISPLAYED_PLAYERS: {
      const displayedPlayers = Object.values(state.players)
        .filter((p) => sliderFilter(p, "weight", state.weightFilter))
        .filter((p) => sliderFilter(p, "height", state.heightFilter))
        .filter((p) => sliderFilter(p, "goals", state.goalsFilter))
        .filter((p) =>
          state.nationalityFilter === "Todos" ||
          state.nationalityFilter === null
            ? p
            : p.nationality === state.nationalityFilter
        )
        .filter((p) =>
          state.teamNameFilter === "Todos" || state.teamNameFilter === null
            ? p
            : p.teamName === state.teamNameFilter
        )
        .sort((a, b) => b.goals - a.goals)
        .map((pp) => pp.id);
      return { ...state, displayedPlayers };
    }
    case SET_LOADING:
      return { ...state, loading: action.loading };
    default: {
      return state;
    }
  }
};

export default apiReducer;
