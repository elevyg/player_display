import { Player } from "../types/Player";

export const SET_TOP_SCORERS = "SET_TOP_SCORERS";

export type Dispatch = (action: Action) => void;

export interface State {
  players: Record<string, Player>;
  topScorers: string[];
}

interface SetTopScorers {
  type: typeof SET_TOP_SCORERS;
  players: Record<string, Player>;
  topScorers;
}

export type Action = SetTopScorers;
