import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

import { Board } from './components/Board'
import { FinishModal } from './components/FinishModal'
import { Menu } from './components/Menu'
import { Header } from './components/Header'
import { useRecord } from './hooks/useRecord'
import { useTimer } from './hooks/useTimer'

export default function App () {
  const [game, setGame] = useState(false)
  const [winner, setWinner] = useState(false)
  const { timer, startTimer, stopTimer, resetTimer } = useTimer()
  const { record, saveRecord, getRecord } = useRecord(timer)

  const MAX_SECS_ALLOWED = 600

  if (timer > MAX_SECS_ALLOWED) {
    setGame(false)
    setWinner(false)
    resetTimer()
  }

  const startStopGame = () => {
    setGame(!game)
    setWinner(false)
    game ? resetTimer() : startTimer()
  }

  const winGame = () => {
    setGame(false)
    setWinner(true)
    stopTimer()
    saveRecord()
    void confetti()
  }

  useEffect(() => { getRecord() }, [record])

  return (
    <div className='bg-slate-900 text-slate-50'>
      <div className="h-screen max-w-4xl mx-auto">
        <Header
          game={game} timer={timer} startStopGame={startStopGame}
        />

        <main className="h-5/6 flex justify-center items-center">
          {
            game
              ? <Board winGame={winGame} />
              : <Menu
                record={record} startStopGame={startStopGame}
              />
          }

          {
            winner &&
            <FinishModal timer={timer} closeModal={setWinner} />
          }
        </main>

      </div>
    </div>
  )
}
