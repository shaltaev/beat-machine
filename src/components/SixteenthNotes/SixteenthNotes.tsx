import React, { FC } from 'react'

import styles from './style.css'
import { Beat } from '@src/components/Beat'

export const SixteenthNotes: FC = () => (
  <div className={styles.sixteenthNotes}>
    <Beat />
    <Beat />
    <Beat />
    <Beat />
  </div>
)
