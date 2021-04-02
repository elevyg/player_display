/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable arrow-body-style */
import React from 'react'
import { theme } from '../utils/theme'
import { spacing } from '../utils/units'

interface Props {
  
}

const FilterBar = (props: Props) => {

  const onClickHandle =() => {}
  return (
    <div style={{ backgroundColor: theme.color.white , minHeight: '100%', minWidth: 350, display: "flex", flexDirection: 'column', justifyContent: "flex-start", alignItems: 'center', paddingTop: spacing.xxlarge }}>
      <button type="button" className="text" onClick={onClickHandle} >
        Filtros
      </button>
    </div>
  )
}

export default FilterBar
