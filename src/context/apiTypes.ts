import { Player } from "../types/Player";
import { Season } from "../types/Seasons";

export const SET_TOP_SCORERS = "SET_TOP_SCORERS";
export const UPDATE_DISPLAYED_PLAYERS = "UPDATE_DISPLAYED_PLAYERS";
export const SET_SEASONS = "SET_SEASONS";
export const SET_SEASON = "SET_SEASON";
export const SET_FILTER = "SET_FILTER";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const SET_LOADING = "SET_LOADING";
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

export type Dispatch = (action: Action) => void;

export interface State {
  loading: boolean;
  players: Record<string, Player>;
  searchText: string | null;
  displayedPlayers: string[];
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

interface UpdateDisplayedPlayers {
  type: typeof UPDATE_DISPLAYED_PLAYERS;
}
interface ClearFilters {
  type: typeof CLEAR_FILTERS;
}
interface ClearSearch {
  type: typeof CLEAR_SEARCH;
}

interface SetSearchText {
  type: typeof SET_SEARCH_TEXT;
  searchText: string;
}

export type Action =
  | SetTopScorers
  | SetFilter
  | SetSeasons
  | SetSeason
  | SetLoading
  | UpdateDisplayedPlayers
  | SetSearchText
  | ClearFilters
  | ClearSearch;
