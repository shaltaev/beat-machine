export interface ISixteenth {
  id: string
  sample: {
    dir: string
    fileName: string
  } | null
}

export type BeatFactor = [boolean, boolean, boolean, boolean]
export type SixteenthNotesFactor = [...BeatFactor, ...BeatFactor, ...BeatFactor, ...BeatFactor]
