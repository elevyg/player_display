/** @jsxImportSource @emotion/react */

import React from "react"
import { createStyles } from "../types/emotion-styles"

interface Props {
  style?: React.CSSProperties
}

const Card: React.FC<Props> = (props) => (
    <div {...props} css={{ ...styles.card, ...props.style }}>
      {props.children}
    </div>
  )

export default Card

const styles = createStyles({
  card: {
    width: 250,
    height: 300,
    border: "solid",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "white",
    overflow: 'hidden'
  },
})
