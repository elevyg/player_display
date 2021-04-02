import { Action, SET_TOP_SCORERS, State } from "./apiTypes";

export const initialState: State = {
  topScorers: [],
  players: {},
};

const apiReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_TOP_SCORERS:
      return {
        ...state,
        players: action.players,
        topScorers: action.topScorers,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default apiReducer;
