/* eslint-disable no-useless-catch */
/* eslint-disable no-unreachable */
import { Player, PlayerAPI } from "../types/Player";
import { API } from "../utils/api";

import {
  Dispatch,
  SET_LOADING,
  SET_SEASONS,
  SET_TOP_SCORERS,
} from "./apiTypes";

export const getTopScorers = async (
  dispatch: Dispatch,
  seasonId: string = "16020"
) => {
  try {
    dispatch({ type: SET_LOADING, loading: true });
    const api = await API();
    const response = await api.get(`topscorers/season/${seasonId}/aggregated`, {
      params: { include: "aggregatedGoalscorers.player.team" },
    });

    const players = response.data.data.aggregatedGoalscorers.data.reduce(
      (acc: Record<string, Player>, curr: PlayerAPI) => ({
        [curr.player_id]: {
          id: curr.player_id,
          name: curr.player.data.display_name,
          img: curr.player.data.image_path,
          goals: curr.goals,
          weight: curr.player.data.weight
            ? curr.player.data.weight.split(" ")[0]
            : null,
          weightUnit: curr.player.data.weight
            ? curr.player.data.weight.split(" ")[1]
            : null,
          height: curr.player.data.height
            ? curr.player.data.height.split(" ")[0]
            : null,
          heightUnit: curr.player.data.height
            ? curr.player.data.height.split(" ")[1]
            : null,
          teamId: curr.team_id,
          teamName: curr.player.data.team
            ? curr.player.data.team.data.name
            : "",
          teamLogo: curr.player.data.team
            ? curr.player.data.team.data.logo_path
            : null,
          nationality: curr.player.data.nationality,
        },
        ...acc,
      }),
      {}
    );

    return dispatch({ type: SET_TOP_SCORERS, players });
  } catch (e) {
    dispatch({ type: SET_LOADING, loading: false });
    throw e;
  }
};

export const getSeasons = async (dispatch: Dispatch) => {
  try {
    const api = await API();
    const response = await api.get("seasons");

    const seasons = response.data.data
      .filter((d) => d.league_id === 271)
      .map((d) => ({ name: d.name, id: d.id.toString() }));

    dispatch({ type: SET_SEASONS, seasons });
  } catch (e) {
    throw e;
  }
};
