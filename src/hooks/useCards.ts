import { useEffect, useReducer } from 'react'
import { type MemeAPI, type Meme } from '../types'
import { getMemes } from '../services/getMemes'
// import { allAPIMemes } from '../mocks/apiMemes'

export type Action =
  | { type: 'setCards', payload: Meme[] }
  | { type: 'rotateOneCard', payload: number }
  | { type: 'rotateOneCardUp', payload: number }
  | { type: 'rotateOneCardBack', payload: number }
  | { type: 'correctOneCard', payload: number }
  | { type: 'rotateBackCards' }

const reducer = (state: Meme[], action: Action) => {
  if (action.type === 'setCards') {
    const { payload } = action
    return payload
  }

  if (action.type === 'rotateOneCard') {
    const { payload } = action
    const newState = [...state]
    newState[payload].rotated = true
    return newState
  }

  if (action.type === 'correctOneCard') {
    const { payload } = action
    const newState = [...state]
    newState[payload].correct = true
    return newState
  }

  if (action.type === 'rotateBackCards') {
    const newState = state.map(card => {
      if (!card.correct) {
        return { ...card, rotated: false }
      }
      return { ...card }
    })

    return newState
  }

  return state
}

export function useCards () {
  const [cards, dispatch] = useReducer(reducer, [])

  const mapAPIMemes = (apiMemes: MemeAPI[]) => {
    return apiMemes.map(meme => {
      const memeCard: Meme = {
        id: meme.id,
        name: meme.name,
        url: meme.url,
        rotated: false,
        correct: false
      }

      return memeCard
    })
  }

  useEffect(() => {
    // Memes from API
    getMemes()
      .then(res => {
        const firstIndex = Math.floor(Math.random() * (res.length - 6))
        const sixCards = res.slice(firstIndex, firstIndex + 6)
        const allAPIMemes = [...sixCards, ...sixCards]
        allAPIMemes.sort(() => Math.random() - 0.5)

        const allCards = mapAPIMemes(allAPIMemes)

        dispatch({ type: 'setCards', payload: allCards })
      })
      .catch(console.error)

    // Memes from Mock
    // allAPIMemes.sort(() => Math.random() - 0.5)
    // const allCards = mapAPIMemes(allAPIMemes)

    // dispatch({ type: 'setCards', payload: allCards })
  }, [])

  return {
    cards,
    dispatch
  }
}
