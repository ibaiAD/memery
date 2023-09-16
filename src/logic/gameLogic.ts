import { type Action } from '../hooks/useCards'
import { type Meme } from '../types'

export function checkWin (cards: Meme[]): boolean {
  if (cards.length === 0) return false

  return cards.every(card => card.correct)
}

export function checkMatch ({ index, id, cards, dispatch }: { index: number, id: string, cards: Meme[], dispatch: React.Dispatch<Action> }): boolean {
  const indexOfCopy = cards.findIndex((card, i) => {
    return card.id === id && i !== index
  })

  if (cards[indexOfCopy].rotated) {
    dispatch({ type: 'correctOneCard', payload: index })
    dispatch({ type: 'correctOneCard', payload: indexOfCopy })
    return true
  }
  return false
}

export function checkRotateds (cards: Meme[]): boolean {
  const numberOfRotated = cards.reduce((ac, c) => {
    if (c.rotated && !c.correct) return ac + 1
    return ac
  }, 0)
  return (numberOfRotated > 0)
}
