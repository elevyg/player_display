/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import SB from "material-ui-search-bar";
import { useApi } from "../context/apiContext";
import {
  CLEAR_SEARCH,
  SET_SEARCH_TEXT,
  UPDATE_DISPLAYED_PLAYERS,
} from "../context/apiTypes";
import { createStyles } from "../types/emotion-styles";
import { mq } from "../utils/mq";

interface Props {}

const SearchBar = (props: Props) => {
  const [searchText, setSearchText] = useState<string>();
  const { dispatch } = useApi();
  const onChangeHandle = (sT: string) => {
    setSearchText(searchText);
    dispatch({ type: SET_SEARCH_TEXT, searchText: sT });
    dispatch({ type: UPDATE_DISPLAYED_PLAYERS });
  };

  const onCancelHandle = () => {
    dispatch({ type: CLEAR_SEARCH });
    dispatch({ type: UPDATE_DISPLAYED_PLAYERS });
  };
  return (
    <div>
      <SB
        placeholder="Buscar jugador ... "
        value={searchText}
        onChange={onChangeHandle}
        css={style.searchBar}
        onCancelSearch={onCancelHandle}
      />
    </div>
  );
};

export default SearchBar;

const style = createStyles({
  searchBar: {
    width: "90vw",
    [mq("md")]: {
      width: 300,
      minWidth: 250,
    },
  },
});
