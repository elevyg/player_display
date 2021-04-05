import React, { useMemo, useState } from "react";
import { Select as MUISelect, withStyles } from "@material-ui/core";
import { theme } from "../utils/theme";
import { useApi } from "../context/apiContext";
import { SET_FILTER } from "../context/apiTypes";
import { uniqueList } from "../utils/uniqueList";
import { Player } from "../types/Player";

interface Props {
  filter: keyof Player;
}

const CustomSelect = withStyles({
  root: {
    "& .MuiInput-underline:before": {
      borderBottomColor: `${theme.color.red} important`,
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: `${theme.color.red} important`,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: `${theme.color.red} important`,
    },
  },
  icon: {
    fill: theme.color.red,
  },
})(MUISelect);

const Select = ({ filter }: Props) => {
  const [selection, setSelection] = useState<string | number | null>();
  const { dispatch, state } = useApi();

  const list = useMemo(() => uniqueList(Object.values(state.players), filter), [
    filter,
    state.players,
  ]);

  const onChangeHandle = (e) => {
    setSelection(e.target.value);
    dispatch({
      type: SET_FILTER,
      value: e.target.value,
      key: filter,
    });
  };

  return (
    <CustomSelect
      native
      value={selection}
      autoWidth
      onChange={onChangeHandle}
      style={{ width: "90%" }}
    >
      <option value={null}>Todos</option>
      {list.map((n) => (
        <option value={n} key={n}>
          {n}
        </option>
      ))}
    </CustomSelect>
  );
};

export default Select;
