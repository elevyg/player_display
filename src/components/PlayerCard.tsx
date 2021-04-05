/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/** @jsxImportSource @emotion/react */
import React from "react";
import { GiWeight, GiBodyHeight } from "react-icons/gi";
import { flag } from "country-emoji";
import { useApi } from "../context/apiContext";

import { createStyles } from "../types/emotion-styles";
import { theme } from "../utils/theme";
import { fontSizes, spacing } from "../utils/units";

import Card from "./Card";
import { mq } from "../utils/mq";

interface Props {
  id: string;
  className?: string;
}

const PlayerCard = ({ id }: Props) => {
  const { state } = useApi();
  const selectedPlayer = state.players[id];

  return (
    <Card css={styles.cardContainer}>
      <div style={{ position: "relative", marginTop: spacing.medium }}>
        {selectedPlayer.teamLogo !== null && (
          <img
            src={selectedPlayer.teamLogo}
            alt={selectedPlayer.teamId.toString()}
            width={40}
            height={40}
            style={styles.teamLogo}
          />
        )}
        <div css={styles.imgContainer}>
          <img
            src={selectedPlayer.img}
            alt={selectedPlayer.id.toString()}
            height={100}
            width={100}
          />
        </div>
      </div>
      <div style={styles.infoContainer}>
        <span style={styles.playerTitle}>{selectedPlayer.name}</span>
        <span style={{ fontSize: 30 }}>{flag(selectedPlayer.nationality)}</span>
        <span style={styles.teamTitle}>{selectedPlayer.teamName}</span>
        <p>Goles {selectedPlayer.goals}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div style={styles.centeredRow}>
          <>
            <GiBodyHeight />
            <span>
              {selectedPlayer.height} {selectedPlayer.heightUnit}
            </span>
          </>
        </div>
        <div style={styles.centeredRow}>
          <>
            <GiWeight />
            <span>
              {selectedPlayer.weight} {selectedPlayer.weightUnit}
            </span>
          </>
        </div>
      </div>
    </Card>
  );
};

export default PlayerCard;

const styles = createStyles({
  cardContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    marginBottom: 20,
    [mq("md")]: {
      marginBottom: 0,
    },
  },
  teamLogo: {
    position: "absolute",
    display: "inline-block",
    right: -10,
    top: 0,
  },
  imgContainer: {
    // marginTop: spacing.medium,
    borderRadius: 100,
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: theme.color.beige,
    minHeight: 120,
    width: 120,
    minWidth: 120,
    overflow: "hidden",
    // position: "relative",
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.small,
  },
  centeredRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.color.red,
  },
  playerTitle: {
    fontSize: fontSizes.large,
    fontWeight: 900,
    textAlign: "center",
  },
  teamTitle: {
    fontSize: fontSizes.medium,
    fontWeight: 600,
    color: theme.color.gray,
  },
});
