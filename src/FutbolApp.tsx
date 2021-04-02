/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import FilterBar from "./components/FilterBar";

import PlayerCard from "./components/PlayerCard";
import { getTopScorers } from "./context/apiActions";
import { useApi } from "./context/apiContext";
import { createStyles } from "./types/emotion-styles";


interface Props {}

const FutbolApp = (props: Props) => {
  const { state, dispatch } = useApi();
  useEffect(() => {
    getTopScorers(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    
  },[])

  

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        minHeight: "100vh"
      }}
    >
      <FilterBar />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
        <h1 style={{ marginLeft: 20 }}>Goleadores</h1>
        <div css={styles.cardsContainer}>
          {state.players &&
            Object.keys(state.players).map((p: string) => (
              <PlayerCard id={p} key={p} />
            ))}
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
