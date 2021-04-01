import { Player } from "../types/Player";

export const SET_PLAYERS = "GET_PLAYERS";

export type Dispatch = (action: Action) => void;

export interface State {
  beerList: Record<string, Player>;
}

interface GetPlayers {
  type: typeof SET_PLAYERS;
  payload: Record<string, Player>;
}

export type Action = GetPlayers;
