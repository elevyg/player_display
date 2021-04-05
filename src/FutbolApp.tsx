/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";

import PlayerCard from "./components/PlayerCard";
import { getSeasons, getTopScorers } from "./context/apiActions";
import { useApi } from "./context/apiContext";
import { createStyles } from "./types/emotion-styles";
import { Player } from "./types/Player";

interface Props {}

const sliderFilter = (
  p: Player,
  key: keyof Player,
  filter: number[] | null
) => {
  if (!filter) {
    return p;
  }
  return p[key] >= filter[0] && p[key] <= filter[1];
};
const FutbolApp = (props: Props) => {
  const { state, dispatch } = useApi();
  const [displayedPlayers, setDisplayedPlayers] = useState<string[]>();
  useEffect(() => {
    getTopScorers(dispatch, state.selectedSeason.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getSeasons(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filteredDP = Object.values(state.players)
      .filter((p) => sliderFilter(p, "weight", state.weightFilter))
      .filter((p) => sliderFilter(p, "height", state.heightFilter))
      .filter((p) => sliderFilter(p, "goals", state.goalsFilter))
      .filter((p) =>
        state.nationalityFilter === "Todos" || state.nationalityFilter === null
          ? p
          : p.nationality === state.nationalityFilter
      )
      .filter((p) =>
        state.teamNameFilter === "Todos" || state.teamNameFilter === null
          ? p
          : p.teamName === state.teamNameFilter
      )
      .sort((a, b) => b.goals - a.goals)
      .map((pp) => pp.id);
    setDisplayedPlayers(filteredDP);
  }, [
    state.goalsFilter,
    state.heightFilter,
    state.players,
    state.weightFilter,
    state.nationalityFilter,
    state.teamNameFilter,
  ]);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        minHeight: "100vh",
      }}
    >
      <FilterBar />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
        <h1 style={{ marginLeft: 20 }}>Goleadores</h1>
        <div css={styles.cardsContainer}>
          {state.loading ? (
            <h1>Cargando ...</h1>
          ) : (
            displayedPlayers.map((p: string) => <PlayerCard id={p} key={p} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default FutbolApp;

const styles = createStyles({
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridRowGap: 20,
    marginLeft: 20,
  },
});
