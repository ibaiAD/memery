export interface MemesResponse {
  success: boolean
  data: Data
}

export interface Data {
  memes: MemeAPI[]
}

export interface MemeAPI {
  id: string
  name: string
  url: string
  width: number
  height: number
  box_count: number
  captions: number
}

export interface Meme {
  id: string
  name: string
  url: string
  rotated: boolean
  correct: boolean
}
