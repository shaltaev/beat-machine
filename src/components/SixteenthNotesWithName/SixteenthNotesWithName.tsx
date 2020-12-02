import React, { FC } from 'react'

import styles from './style.css'
import { SixteenthNotes } from '@src/components'

export const SixteenthNotesWithName: FC = () => (
  <>
    <span className={styles.label}>Text</span>
    <SixteenthNotes />
  </>
)
