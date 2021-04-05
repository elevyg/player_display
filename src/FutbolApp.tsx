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

  useEffect(() => {
    getTopScorers(dispatch, state.selectedSeason.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.selectedSeason]);

  useEffect(() => {
    getSeasons(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {state.loading || state.displayedPlayers.length === 0 ? (
            <h1>Cargando ...</h1>
          ) : (
            state.displayedPlayers.map((p: string) => (
              <PlayerCard id={p} key={p} />
            ))
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
