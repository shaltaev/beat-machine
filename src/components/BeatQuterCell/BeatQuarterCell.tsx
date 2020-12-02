import React, { FC, useState } from 'react'
import cn from 'classnames'

import styles from './style.css'

export const BeatQuarterCell: FC = () => {
  const [isActive, setIsActive] = useState(false)

  function onClick(): void {
    setIsActive(prevState => !prevState)
  }

  return (
    <button
      onClick={onClick}
      className={cn(styles.beatQuarterCell, { [String(styles.beatQuarterCellActive)]: isActive })}
    />
  )
}
