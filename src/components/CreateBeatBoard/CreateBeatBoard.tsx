import React, { FC, useEffect, useState, ChangeEvent, useCallback } from 'react'
import { v4 } from 'uuid'
import cn from 'classnames'

import styles from './style.css'
import { SixteenthContainer } from '@src/components/SixteenthContainer'
import { ISixteenth } from '@src/models/sixteenth'
import { SAMPLES_DIRS, Samples } from '@src/constants'
import { useInterval } from '@src/use/interval'

const initialSixteenthArray: ISixteenth[] = new Array(6).fill(0).map(() => {
  const dir = SAMPLES_DIRS[Math.floor(Math.random() * SAMPLES_DIRS.length)]
  const fileNames = dir !== undefined ? Samples[dir] : []
  const fileName = fileNames[Math.floor(Math.random() * fileNames.length)]

  return {
    id: v4(),
    sample: dir !== undefined && fileName !== undefined ? { dir, fileName } : null,
  }
})

function genSixteenth(sample: ISixteenth['sample']): ISixteenth {
  return {
    id: v4(),
    sample: sample?.dir !== undefined && sample?.fileName !== undefined ? sample : null,
  }
}

export const CreateBeatBoard: FC = () => {
  const [sixteenthArray, setSixteenthArray] = useState(initialSixteenthArray)

  const [isPlay, setIsPlay] = useState(false)
  const [bpm, setBPM] = useState(120)
  const [tickDuration, setTickDuration] = useState(Math.max(Math.floor((1000 * 60) / bpm / 4), 1))
  const [tick, setTick] = useState(0)
  const [position, setPosition] = useState(0)

  const [addDir, setAddDir] = useState(SAMPLES_DIRS[0])

  const handleAddDir = (ev: ChangeEvent<HTMLSelectElement>): void => {
    const val = ev.target.value
    if (SAMPLES_DIRS.includes(val as typeof SAMPLES_DIRS[0])) {
      setAddDir(() => val as typeof SAMPLES_DIRS[0])
    }
  }

  const [fn, setFn] = useState(addDir !== undefined ? Samples[addDir][0] : null)

  useEffect(() => {
    if (addDir !== undefined) {
      setFn(() => Samples[addDir][0])
    } else {
      setFn(() => null)
    }
  }, [setFn, addDir])

  const handleFn = useCallback(
    (ev: ChangeEvent<HTMLSelectElement>): void => {
      const val = ev.target.value
      const folderElements = addDir !== undefined ? Samples[addDir] : []
      if (folderElements.includes(val)) {
        setFn(() => val)
      }
    },
    [addDir],
  )

  useInterval(
    () => {
      if (isPlay) {
        setTick(prevState => (prevState + 1 > 15 ? 0 : prevState + 1))
      }
    },
    isPlay ? tickDuration : null,
  )

  useInterval(
    () => {
      if (isPlay) {
        setPosition(prevState => (prevState + 1 > 100 ? 0 : prevState + 1))
      }
    },
    isPlay ? Math.floor((tickDuration * 4) / 25) : null,
  )

  useEffect(() => setTickDuration(Math.max(Math.floor((1000 * 60) / bpm / 4), 1)), [bpm])

  const makeHandleDelete = (id: ISixteenth['id']) => () => {
    setSixteenthArray(prevState => prevState.filter(i => i.id !== id))
  }

  const handleAdd = (): void => {
    addDir !== undefined &&
      fn !== undefined &&
      fn !== null &&
      setSixteenthArray(prevState => [...prevState, genSixteenth({ dir: addDir, fileName: fn })])
  }

  const handleBPM = (ev: ChangeEvent<HTMLInputElement>): void => {
    const val = parseInt(ev.target.value)
    setBPM(() => (!isNaN(val) ? Math.max(val, 1) : 1))
  }

  const handleStop = (): void => {
    setIsPlay(() => false)
    setPosition(() => 0)
    setTick(() => 0)
  }

  return (
    <div className={styles.createBeatBoard}>
      <div className={styles.controls}>
        <div className={cn(styles.inputBox, styles.inputBpm)}>
          <label className={styles.inputLabel} htmlFor="BPM">
            BPM
          </label>
          <input
            className={styles.inputField}
            id="BPM"
            type="number"
            min={1}
            step={1}
            max={1024}
            value={bpm}
            onChange={handleBPM}
          />
        </div>
        <button onClick={() => setIsPlay(true)} className={styles.play}>
          Play
        </button>
        <button onClick={handleStop} className={styles.stop}>
          Stop
        </button>
      </div>
      <div className={styles.progressBox}>
        <progress max={99} value={position} className={styles.progress} />
      </div>
      <div className={styles.board}>
        {sixteenthArray.map(sixteenth => (
          <SixteenthContainer
            key={sixteenth.id}
            sixteenth={sixteenth}
            isPlay={isPlay}
            tickDuration={tickDuration}
            tick={tick}
            handleDelete={makeHandleDelete(sixteenth.id)}
          />
        ))}
      </div>
      <div className={styles.addBox}>
        <span className={styles.addBoxSpan}>Add Sixteenth:</span>
        <div className={styles.addBoxFolder}>
          <label className={styles.addBoxLabel} htmlFor="Folder">
            Folder
          </label>
          <select className={styles.addBoxSelect} id="Folder" value={addDir} onChange={handleAddDir}>
            {SAMPLES_DIRS.map(dir => (
              <option key={dir} value={dir}>
                {dir}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.addBoxFolder}>
          <label className={styles.addBoxLabel} htmlFor="FileName">
            FileName
          </label>
          <select className={styles.addBoxSelect} id="FileName" value={fn === null ? '' : fn} onChange={handleFn}>
            {addDir !== undefined &&
              Samples[addDir].map(fn => (
                <option key={fn} value={fn}>
                  {fn}
                </option>
              ))}
          </select>
        </div>
        <button
          className={styles.addBoxAddBtn}
          onClick={handleAdd}
          disabled={addDir === undefined || fn === undefined || fn === null}
        >
          ADD
        </button>
      </div>
    </div>
  )
}
