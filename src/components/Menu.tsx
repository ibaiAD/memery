import { renderTime } from '../utils/renderTime'

interface Props {
  record: number
  startStopGame: () => void
}

export function Menu ({ record, startStopGame }: Props) {
  return (
    <div>
      <p className='text-4xl font-bold hover:text-purple-500 cursor-pointer hover:-translate-y-1 hover:scale-105 active:translate-y-0 transition-all'
        onClick={startStopGame}
      >
        Start a new game!
      </p>
      {record !== 0 && <div className='text-lg mt-3 flex justify-evenly'><span>Record:</span><span>⏱ {renderTime(record)}</span></div>}
    </div>
  )
}
