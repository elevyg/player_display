import { Player } from "../types/Player";
import { Season } from "../types/Seasons";

export const SET_TOP_SCORERS = "SET_TOP_SCORERS";
export const SET_SEASONS = "SET_SEASONS";
export const SET_SEASON = "SET_SEASON";
export const SET_FILTER = "SET_FILTER";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const SET_LOADING = "SET_LOADING";

export type Dispatch = (action: Action) => void;

export interface State {
  loading: boolean;
  players: Record<string, Player>;
  seasons: Season[];
  selectedSeason: Season | null;
  weightFilter: number[] | null;
  goalsFilter: number[] | null;
  heightFilter: number[] | null;
  nationalityFilter: string | null;
  teamNameFilter: string | null;
}

interface SetTopScorers {
  type: typeof SET_TOP_SCORERS;
  players: Record<string, Player>;
}

interface SetSeasons {
  type: typeof SET_SEASONS;
  seasons: Season[];
}

interface SetSeason {
  type: typeof SET_SEASON;
  season: Season;
}
interface SetFilter {
  type: typeof SET_FILTER;
  key: keyof Player;
  value: number[] | string | null;
}

interface SetLoading {
  type: typeof SET_LOADING;
  loading: boolean;
}

export type Action =
  | SetTopScorers
  | SetFilter
  | SetSeasons
  | SetSeason
  | SetLoading;
