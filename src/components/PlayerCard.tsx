/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from "react";

import Card from "./Card";

interface Props {
  id: string;
  className?: string;
}

const PlayerCard = ({ id }: Props) => {
  return (
    <Card>
      {/* {!!selectedBeer.labels !== undefined && (
        <img src={selectedBeer.labels.medium} alt="beer" />
      )} */}
      <h2>Jugador</h2>
    </Card>
  );
};

export default PlayerCard;
