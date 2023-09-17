import { renderTime } from '../utils/renderTime'

interface Props {
  game: boolean
  timer: number
  startStopGame: () => void
}

export function Header ({ game, timer, startStopGame }: Props) {
  return (
    <header className="py-3 flex justify-around items-center">
      <h1 className="text-2xl font-semibold flex items-center">Memery</h1>
      <section className="text-2xl text-purple-500 flex items-center">
        <article>{renderTime(timer)}</article>
      </section>
      <button className="text-xl font-semibold px-4 py-1 bg-slate-600 rounded-lg shadow-sm shadow-slate-400 transition-all hover:bg-purple-500 hover:text-slate-800 hover:-translate-y-1 hover:shadow-md hover:shadow-slate-400 active:bg-slate-600 active:text-slate-50 active:translate-y-0 active:shadow-sm active:shadow-slate-400"
        onClick={startStopGame}
      >{!game ? 'Start' : 'Stop'}</button>
    </header>
  )
}
