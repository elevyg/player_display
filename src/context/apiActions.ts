import { Player } from "../types/Player";
import { API } from "../utils/api";
import { Dispatch, SET_TOP_SCORERS } from "./apiTypes";

export const getTopScorers = async (dispatch: Dispatch) => {
  const api = await API();
  const response = await api.get("topscorers/season/16020/aggregated", {
    params: { include: "aggregatedGoalscorers.player.team" },
  });

  const topScorers = response.data.data.aggregatedGoalscorers.data.map(
    (d) => d.player_id
  );

  const players = response.data.data.aggregatedGoalscorers.data.reduce(
    (acc: Record<string, Player>, curr: Player) => ({
      [curr.player_id]: curr,
      ...acc,
    }),
    {}
  );

  return dispatch({ type: SET_TOP_SCORERS, players, topScorers });
};
