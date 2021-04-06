/* eslint-disable react/require-default-props */
/* eslint-disable arrow-body-style */
/** @jsxImportSource @emotion/react */
import { Button, useMediaQuery } from "@material-ui/core";
import React from "react";
import { GrClose } from "react-icons/gr";
import { useApi } from "../context/apiContext";
import { CLEAR_FILTERS } from "../context/apiTypes";

import { createStyles } from "../types/emotion-styles";
import { mq } from "../utils/mq";
import { theme } from "../utils/theme";
import { spacing } from "../utils/units";
import SeasonSelect from "./SeasonSelect";
import Select from "./Select";
import Slider from "./Slider";

interface Props {
  closeFilters?: () => void;
}

const FilterBar = ({ closeFilters }: Props) => {
  const medium = useMediaQuery(mq("md"));
  const { dispatch } = useApi();
  const onClearHandle = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <div css={styles.container}>
      <div css={styles.headerContainer}>
        <h1>Temporada</h1>
        {!medium && <GrClose css={styles.closeButton} onClick={closeFilters} />}
      </div>
      <SeasonSelect />
      <h2>Peso [kg]</h2>
      <Slider filter="weight" min={60} max={80} />
      <h2>Altura [cm]</h2>
      <Slider filter="height" min={100} max={250} />
      <h2>Goles</h2>
      <Slider filter="goals" min={0} max={30} />
      <h2>Nacionalidad</h2>
      <Select filter="nationality" />
      <h2>Equipo</h2>
      <Select filter="teamName" />
      <Button onClick={onClearHandle} style={styles.clearButton}>
        Limpiar Filtros
      </Button>
    </div>
  );
};

export default FilterBar;

const styles = createStyles({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: spacing.medium,
  },
  closeButton: { fontSize: 40 },
  container: {
    backgroundColor: theme.color.white,
    minHeight: "100%",
    [mq("xs")]: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      flexGrow: 1,
      zIndex: 200,
    },
    [mq("md")]: {
      width: 350,
      minWidth: 350,
      flexGrow: 0,
      position: "static",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: spacing.xxlarge,
    },
  },
  clearButton: { marginTop: spacing.large },
});
