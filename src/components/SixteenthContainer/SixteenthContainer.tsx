import React, { FC, useState, useCallback, useRef, useEffect } from 'react'
import { Player } from 'tone'

import { SixteenthTitle, SixteenthNotes } from '@src/components'
import { ISixteenth, SixteenthNotesFactor } from '@src/models/sixteenth'

const f = false

interface IOwnProps {
  sixteenth: ISixteenth
  isPlay: boolean
  tickDuration: number
  tick: number

  handleDelete: () => void
}

export const SixteenthContainer: FC<IOwnProps> = props => {
  const {
    sixteenth: { sample },
    isPlay,
    tickDuration,
    tick,
    handleDelete,
  } = props

  const melody = useRef<Player | null>(null)

  // eslint-disable-next-line
  const [notes, setNotes] = useState<SixteenthNotesFactor>([f,f,f,f, f,f,f,f, f,f,f,f, f,f,f,f])

  useEffect(() => {
    if (sample?.fileName !== undefined && sample?.dir !== undefined) {
      melody.current = new Player(`/assets/samples/${sample.dir}/${sample.fileName}.wav`).toDestination()
    }
  }, [sample])

  useEffect(() => {
    if (melody.current !== null && notes[tick] === true && isPlay) {
      melody.current?.start(0, 0, tickDuration)
    }
  }, [isPlay, tick, notes, tickDuration])

  const setNote = useCallback(
    (n: number) => {
      if (n >= 0 && n < notes.length) {
        setNotes(prevState => {
          const newNState = !(prevState[n] ?? true)

          if (newNState && melody.current !== null && !isPlay) {
            melody.current?.start()
          }

          return [...prevState.slice(0, n), newNState, ...prevState.slice(n + 1, notes.length)] as SixteenthNotesFactor
        })
      }
    },
    [setNotes, isPlay, notes.length],
  )

  return sample !== null ? (
    <>
      <SixteenthTitle title={`${sample.dir} :: ${sample.fileName}`} />
      <SixteenthNotes notes={notes} setNote={setNote} />
      <button style={{ color: 'red', fontSize: '.75rem', fontWeight: 600 }} onClick={handleDelete}>
        Delete
      </button>
    </>
  ) : null
}
