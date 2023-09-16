import { useEffect, useRef, useState } from 'react'
import { Card } from './Card'
import { useCards } from '../hooks/useCards'
import { checkMatch, checkRotateds, checkWin } from '../logic/gameLogic'

interface Props {
  winGame: () => void
}

export function Board ({ winGame }: Props) {
  const { cards, dispatch } = useCards()
  const [blocked, setBlocked] = useState(false)
  const haveWinner = checkWin(cards)
  const timeOutRef = useRef(0)

  useEffect(() => {
    if (haveWinner) {
      winGame()
    }
  }, [haveWinner])

  const gameLoop = ({ index, id }: { index: number, id: string }) => {
    if (checkRotateds(cards)) {
      setBlocked(true)
      timeOutRef.current = setTimeout(() => {
        dispatch({ type: 'rotateBackCards' })
        setBlocked(false)
      }, 800)
    }

    if (checkMatch({ index, id, cards, dispatch })) {
      setBlocked(false)
      clearTimeout(timeOutRef.current)
    }
  }

  return (
    <section id="board" className="h-full w-5/6 grid grid-cols-3  auto-rows-fr gap-2 place-content-center">
      {cards.map((card, index) => (
        <Card key={index} card={card} index={index} handleClick={gameLoop} dispatch={dispatch} blocked={blocked} />
      ))}
    </section>
  )
}
