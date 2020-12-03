import React, { FC } from 'react'
import cn from 'classnames'

import styles from './style.css'

export const BeatQuarterCell: FC<{
  isActive: boolean
  handleClick: () => void
}> = ({ isActive, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={cn(styles.beatQuarterCell, { [String(styles.beatQuarterCellActive)]: isActive })}
    />
  )
}
