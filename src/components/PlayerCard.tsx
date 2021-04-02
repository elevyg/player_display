/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/** @jsxImportSource @emotion/react */
import React from "react";
import { GiWeight, GiBodyHeight } from "react-icons/gi";
import { useApi } from "../context/apiContext";
import { createStyles } from "../types/emotion-styles";
import { theme } from "../utils/theme";
import { fontSizes, spacing } from "../utils/units";

import Card from "./Card";

interface Props {
  id: string;
  className?: string;
}

const PlayerCard = ({ id }: Props) => {
  const { state } = useApi();
  const selectedPlayer = state.players[id];

  if (selectedPlayer) {
    return (
      <Card style={styles.cardContainer}>
        <div style={{ position: "relative", marginTop: spacing.medium }}>
          {!!selectedPlayer.player.data.team && (
            <img
              src={selectedPlayer.player.data.team.data.logo_path}
              alt={selectedPlayer.team_id.toString()}
              width={40}
              height={40}
              style={styles.teamLogo}
            />
          )}
          <div css={styles.imgContainer}>
            <img
              src={selectedPlayer.player.data.image_path}
              alt={selectedPlayer.player_id.toString()}
              height={100}
              width={100}
            />
          </div>
        </div>
        <div style={styles.infoContainer}>
          <p style={styles.playerTitle}>
            {selectedPlayer.player.data.fullname}
          </p>
          <span style={styles.teamTitle}>
            {!!selectedPlayer.player.data.team &&
              selectedPlayer.player.data.team.data.name}
          </span>
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
            {!!selectedPlayer.player.data.height && (
              <>
                <GiBodyHeight />
                <span>{selectedPlayer.player.data.height}</span>
              </>
            )}
          </div>
          <div style={styles.centeredRow}>
            {selectedPlayer.player.data.weight && (
              <>
                <GiWeight />
                <span>{selectedPlayer.player.data.weight}</span>
              </>
            )}
          </div>
        </div>
      </Card>
    );
  }
  return <div style={{ backgroundColor: "red" }} />;
};

export default PlayerCard;

const styles = createStyles({
  cardContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",

    height: "100%",
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