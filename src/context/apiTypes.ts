import { Player } from "../types/Player";

export const SET_TOP_SCORERS = "SET_TOP_SCORERS";
export const SLIDER_FILTER = "FILTER";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export type Dispatch = (action: Action) => void;

export interface State {
  players: Record<string, Player>;
  weightFilter: number[] | null;
  goalsFilter: number[] | null;
  heightFilter: number[] | null;
}

interface SetTopScorers {
  type: typeof SET_TOP_SCORERS;
  players: Record<string, Player>;
}

interface SetSliderFilter {
  type: typeof SLIDER_FILTER;
  key: keyof Player;
  value: number[] | null;
}

export type Action = SetTopScorers | SetSliderFilter;
