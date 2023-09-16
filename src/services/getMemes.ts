import { type MemesResponse } from '../types'

export const getMemes = async () => {
  const res = await fetch('https://api.imgflip.com/get_memes')

  if (!res.ok) throw new Error('API Error')

  const { data }: MemesResponse = await res.json()
  return data.memes
}
