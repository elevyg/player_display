import React, { useMemo, useState } from "react";
import { Slider as MUISlider, withStyles } from "@material-ui/core";

import { SLIDER_FILTER } from "../context/apiTypes";
import { useApi } from "../context/apiContext";
import { Player } from "../types/Player";
import { theme } from "../utils/theme";

const CustomSlider = withStyles({
  root: {
    color: theme.color.red,
    height: 3,
    padding: "13px 0",
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
    dispatch({ type: SLIDER_FILTER, key: k, value });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
