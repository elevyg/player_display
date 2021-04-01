import { Action, State } from "./apiTypes";

export const initialState: State = {
  beerList: {},
};

const apiReducer = (state: State, action: Action): State => {
  switch (action.type) {
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default apiReducer;
