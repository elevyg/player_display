/** @jsxImportSource @emotion/react */
import React from "react";
import { useApi } from "../context/apiContext";
import { createStyles } from "../types/emotion-styles";
import { mq } from "../utils/mq";
import { spacing } from "../utils/units";
import PlayerCard from "./PlayerCard";

interface Props {}

const Body = (props: Props) => {
  const { state } = useApi();

  if (state.loading) {
    return (
      <div css={styles.cardsContainer}>
        <h1> Cargando ... </h1>
      </div>
    );
  }
  if (!state.loading && state.displayedPlayers.length === 0) {
    return (
      <div css={styles.cardsContainer}>
        <h1>Sin resultados</h1>
      </div>
    );
  }

  return (
    <div css={styles.cardsContainer}>
      {state.displayedPlayers.map((p: string) => (
        <PlayerCard id={p} key={p} />
      ))}
    </div>
  );
};

export default Body;

const styles = createStyles({
  cardsContainer: {
    gridTemplateColumns: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [mq("md")]: {
      display: "grid",
      gridTemplateColumns: "auto auto ",
      gridRowGap: spacing.small,
      marginLeft: spacing.medium,
      paddingTop: spacing.medium,
      justifyContent: "normal",
      overflow: "auto",
    },
    [mq("xl")]: {
      display: "grid",
      gridTemplateColumns: "auto auto auto auto",
      gridRowGap: spacing.medium,
      marginLeft: spacing.medium,
      paddingTop: spacing.medium,
      justifyContent: "normal",
    },
  },
});
