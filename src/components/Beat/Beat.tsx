import React, { FC } from 'react'

import styles from './style.css'
import { BeatQuarterCell } from '@src/components'
import { BeatFactor } from '@src/models/sixteenth'

export type MakeHandleClick = (q: 0 | 1 | 2 | 3) => () => void

export const Beat: FC<{
  beat: BeatFactor
  makeHandleClick: MakeHandleClick
}> = ({ beat, makeHandleClick }) => (
  <div className={styles.beat}>
    <BeatQuarterCell isActive={beat[0]} handleClick={makeHandleClick(0)} />
    <BeatQuarterCell isActive={beat[1]} handleClick={makeHandleClick(1)} />
    <BeatQuarterCell isActive={beat[2]} handleClick={makeHandleClick(2)} />
    <BeatQuarterCell isActive={beat[3]} handleClick={makeHandleClick(3)} />
  </div>
)
