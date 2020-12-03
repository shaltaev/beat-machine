import React, { FC } from 'react'

import styles from './style.css'
import { Beat } from '@src/components/Beat'
import { BeatFactor, SixteenthNotesFactor } from '@src/models/sixteenth'
import { MakeHandleClick } from '@src/components/Beat/Beat'

export const SixteenthNotes: FC<{
  notes: SixteenthNotesFactor
  setNote: (notesNumber: number) => void
}> = ({ notes, setNote }) => {
  const makeMakeHandleClick: (start: 0 | 4 | 8 | 12) => MakeHandleClick = (start: 0 | 4 | 8 | 12) => (
    q: 0 | 1 | 2 | 3,
  ) => () => {
    setNote(start + q)
  }

  return (
    <div className={styles.sixteenthNotes}>
      <Beat beat={notes.slice(0, 4) as BeatFactor} makeHandleClick={makeMakeHandleClick(0)} />
      <Beat beat={notes.slice(4, 8) as BeatFactor} makeHandleClick={makeMakeHandleClick(4)} />
      <Beat beat={notes.slice(8, 12) as BeatFactor} makeHandleClick={makeMakeHandleClick(8)} />
      <Beat beat={notes.slice(12) as BeatFactor} makeHandleClick={makeMakeHandleClick(12)} />
    </div>
  )
}
