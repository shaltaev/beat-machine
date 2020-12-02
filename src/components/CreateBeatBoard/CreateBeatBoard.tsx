import React, { FC } from 'react'

import styles from './style.css'
import { SixteenthNotesWithName } from '@src/components/SixteenthNotesWithName'

export const CreateBeatBoard: FC = () => (
  <div className={styles.createBeatBoard}>
    <SixteenthNotesWithName />
    <SixteenthNotesWithName />
    <SixteenthNotesWithName />
    <SixteenthNotesWithName />
    <SixteenthNotesWithName />
    <SixteenthNotesWithName />
  </div>
)
