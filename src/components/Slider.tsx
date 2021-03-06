import React, { useMemo, useState } from "react";
import { Slider as MUISlider, withStyles } from "@material-ui/core";

import { SET_FILTER, UPDATE_DISPLAYED_PLAYERS } from "../context/apiTypes";
import { useApi } from "../context/apiContext";
import { Player } from "../types/Player";
import { theme } from "../utils/theme";
import { spacing } from "../utils/units";

const CustomSlider = withStyles({
  root: {
    color: theme.color.red,
    height: 3,
    paddingTop: spacing.large,
  },
})(MUISlider);

interface Props {
  filter: keyof Player;
  min: number;
  max: number;
}

const Slider = ({ filter, min, max }: Props) => {
  const [filterValue, setFilterValue] = useState<number[]>([min, max]);

  const { dispatch, state } = useApi();

  const disabled = useMemo(() => Object.keys(state.players).length === 0, [
    state.players,
  ]);

  const onChangeHandle = (e, value: number[], k: keyof Player) => {
    setFilterValue(value);
    dispatch({ type: SET_FILTER, key: k, value });
    dispatch({ type: UPDATE_DISPLAYED_PLAYERS });
  };

  return (
    <div style={styles.container}>
      <CustomSlider
        style={{ width: "80%" }}
        value={filterValue}
        onChange={(e, value: number[]) => onChangeHandle(e, value, filter)}
        min={min}
        max={max}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        disabled={disabled}
      />
    </div>
  );
};

export default Slider;

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
