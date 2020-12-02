import React, { FC } from 'react'

import styles from './style.css'
import { BeatQuarterCell } from '@src/components'

export const Beat: FC = () => (
  <div className={styles.beat}>
    <BeatQuarterCell />
    <BeatQuarterCell />
    <BeatQuarterCell />
    <BeatQuarterCell />
  </div>
)
