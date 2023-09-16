import { useRef, useState } from 'react'

export function useTimer () {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef(0)

  const startTimer = () => {
    setTimer(0)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current)
  }

  const resetTimer = () => {
    clearInterval(intervalRef.current)
    setTimer(0)
  }

  return {
    timer,
    startTimer,
    stopTimer,
    resetTimer
  }
}
