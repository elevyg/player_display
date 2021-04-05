import React, { useState } from "react";
import SB from "material-ui-search-bar";
import { useApi } from "../context/apiContext";
import { SET_SEARCH_TEXT, UPDATE_DISPLAYED_PLAYERS } from "../context/apiTypes";

interface Props {}

const SearchBar = (props: Props) => {
  const [searchText, setSearchText] = useState<string>();
  const { dispatch } = useApi();
  const onChangeHandle = (sT: string) => {
    setSearchText(searchText);
    dispatch({ type: SET_SEARCH_TEXT, searchText: sT });
    dispatch({ type: UPDATE_DISPLAYED_PLAYERS });
  };
  return (
    <div>
      <SB
        placeholder="Buscar jugador ... "
        value={searchText}
        onChange={onChangeHandle}
        style={{ width: "80%" }}
      />
    </div>
  );
};

export default SearchBar;
