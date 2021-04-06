/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { BiFilter } from "react-icons/bi";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import FilterBar from "./components/FilterBar";

import PlayerCard from "./components/PlayerCard";
import { getSeasons, getTopScorers } from "./context/apiActions";
import { useApi } from "./context/apiContext";
import { createStyles } from "./types/emotion-styles";
import { mq } from "./utils/mq";
import { theme } from "./utils/theme";
import { spacing } from "./utils/units";
import SearchBar from "./components/SearchBar";

interface Props {}

const FutbolApp = (props: Props) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const { state, dispatch } = useApi();

  const medium = useMediaQuery(mq("md"));

  const onClickHandle = () => {
    setShowFilters((prev) => !prev);
  };

  useEffect(() => {
    getTopScorers(dispatch, state.selectedSeason.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.selectedSeason]);

  useEffect(() => {
    getSeasons(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div css={styles.container}>
      {medium && <FilterBar />}
      <div css={styles.headerContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1 css={styles.headerTitle}>Goleadores de Dinamarca</h1>
          <SearchBar />
          <BiFilter css={styles.menuButton} onClick={onClickHandle} />
          {showFilters && (
            <FilterBar closeFilters={() => setShowFilters(false)} />
          )}
        </div>
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
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    minHeight: "100vh",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    alignItems: "center",
    [mq("xs")]: { flexGrow: 2 },
    [mq("md")]: { alignItems: "normal" },
  },
  headerTitle: { marginLeft: spacing.medium, marginRight: spacing.medium },
  menuButton: {
    [mq("md")]: { display: "none" },
    fontSize: 40,
    marginRight: spacing.medium,
    color: theme.color.red,
  },
});
