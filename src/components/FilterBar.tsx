/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core";

import { theme } from "../utils/theme";
import { spacing } from "../utils/units";
import { useApi } from "../context/apiContext";
import { SLIDER_FILTER } from "../context/apiTypes";

interface Props {}

const CustomSlider = withStyles({
  root: {
    color: theme.color.red,
    height: 3,
    padding: "13px 0",
  },
})(Slider);

const FilterBar = (props: Props) => {
  const [filterValue, setFilterValue] = useState<number | number[]>([60, 80]);
  
  const { dispatch } = useApi();

  const onChangeHandle = (e, value: number[]) => {
    setFilterValue(value);
    
  };
  return (
    <div
      style={{
        backgroundColor: theme.color.white,
        minHeight: "100%",
        minWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: spacing.xxlarge,
      }}
    >
      <h2>Peso</h2>
      <CustomSlider
        style={{ width: "80%" }}
        value={filterValue}
        onChange={onChangeHandle}
        min={68}
      />
    </div>
  );
};

export default FilterBar;
