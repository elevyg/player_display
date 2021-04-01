import * as React from "react";

import apiReducer, { initialState } from "./apiReducer";
import { State, Dispatch } from "./apiTypes";

type ApiProviderProps = { children: React.ReactNode };

const ApiContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const ApiProvider = ({ children }: ApiProviderProps) => {
  const [state, dispatch] = React.useReducer(apiReducer, initialState);

  const value = { state, dispatch };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const useApi = () => {
  const context = React.useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within a ApiProvider");
  }
  return context;
};
export { ApiProvider, useApi };
