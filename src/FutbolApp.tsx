/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
import { useApi } from "./context/apiContext";

interface Props {}

const FutbolApp = (props: Props) => {
  const { state, dispatch } = useApi();
  // useEffect(() => {
  //   getPlayer(dispatch);
  //   return () => {};
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <h1>Encuentra tu cerveza</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gridRowGap: 20,
          marginLeft: 20,
        }}
      >
        {state.beerList &&
          Object.keys(state.beerList).map((b: string) => (
            <PlayerCard id={b} key={b} />
          ))}
      </div>
    </div>
  );
};

export default FutbolApp;
