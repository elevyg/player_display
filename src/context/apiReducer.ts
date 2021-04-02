import {
  Action,
  CLEAR_FILTERS,
  SET_TOP_SCORERS,
  SLIDER_FILTER,
  State,
} from "./apiTypes";

export const initialState: State = {
  players: {},
  weightFilter: null,
  goalsFilter: null,
  heightFilter: null,
};

const apiReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_TOP_SCORERS:
      return {
        ...state,
        players: action.players,
      };
    case SLIDER_FILTER: {
      const key = `${action.key}Filter` as
        | "weightFilter"
        | "goalsFilter"
        | "heightFilter";
      return { ...state, [key]: action.value };
    }

    default: {
      return state;
    }
  }
};

export default apiReducer;
