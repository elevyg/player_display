import React from "react";
import { useApi } from "../context/apiContext";
import { theme } from "../utils/theme";
import { spacing } from "../utils/units";
import Slider from "./Slider";

interface Props {}

const FilterBar = (props: Props) => {
  const { state } = useApi();
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
      <Slider filter="weight" min={60} max={80} />
      <h2>Altura</h2>
      <Slider filter="height" min={100} max={200} />
      <h2>Goles</h2>
      <Slider filter="goals" min={0} max={20} />
    </div>
  );
};

export default FilterBar;
