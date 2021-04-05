import React from "react";
import { Select as MUISelect, withStyles } from "@material-ui/core";
import { useApi } from "../context/apiContext";
import { SET_SEASON } from "../context/apiTypes";
import { getTopScorers } from "../context/apiActions";

interface Props {}

const SeasonSelect = (props: Props) => {
  const { state, dispatch } = useApi();

  const onChangeHandle = (e) => {
    const season = state.seasons.find((s) => s.name === e.target.value);
    dispatch({ type: SET_SEASON, season });
  };
  return (
    <MUISelect
      native
      variant="filled"
      autoWidth={true}
      value={state.selectedSeason.name}
      style={{ width: "90%" }}
      onChange={onChangeHandle}
    >
      {state.seasons.map((s) => (
        <option key={s.id} value={s.name}>
          {s.name}
        </option>
      ))}
    </MUISelect>
  );
};

export default SeasonSelect;
