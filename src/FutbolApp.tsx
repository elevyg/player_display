/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { BiFilter } from "react-icons/bi";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import FilterBar from "./components/FilterBar";

import { getSeasons, getTopScorers } from "./context/apiActions";
import { useApi } from "./context/apiContext";
import { createStyles } from "./types/emotion-styles";
import { mq } from "./utils/mq";
import { theme } from "./utils/theme";
import { spacing } from "./utils/units";
import SearchBar from "./components/SearchBar";
import Body from "./components/Body";

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
      <div css={styles.bodyContainer}>
        <div css={styles.titleContainer}>
          <div css={styles.headerContainer}>
            <h1 css={styles.headerTitle}>Goleadores de Dinamarca</h1>
            <SearchBar />
          </div>
          <BiFilter css={styles.menuButton} onClick={onClickHandle} />
          {showFilters && (
            <FilterBar closeFilters={() => setShowFilters(false)} />
          )}
        </div>
        <Body />
      </div>
    </div>
  );
};

export default FutbolApp;

const styles = createStyles({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    minHeight: "100vh",
  },
  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    alignItems: "center",
    [mq("xs")]: { flexGrow: 2 },
    [mq("md")]: { alignItems: "normal" },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    [mq("md")]: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: spacing.medium,
    [mq("md")]: {
      flexDirection: "row",
      justifyContent: "flex-start",
      marginBottom: 0,
    },
  },
  headerTitle: {
    marginLeft: spacing.medium,
    marginRight: spacing.medium,
    textAlign: "center",
  },
  menuButton: {
    [mq("md")]: { display: "none" },
    fontSize: 60,
    marginRight: spacing.large,
    marginTop: spacing.medium,
    color: theme.color.red,
  },
});
