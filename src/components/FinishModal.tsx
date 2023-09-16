import { renderTime } from '../utils/renderTime'

interface Props {
  timer: number
  closeModal: (value: React.SetStateAction<boolean>) => void
}

export function FinishModal ({ timer, closeModal }: Props) {
  return (
    <div className='absolute z-10 bg-slate-900 border-2 rounded-xl w-4/5 max-w-4xl h-3/5 flex flex-col justify-center items-center gap-10 shadow-lg shadow-slate-600 cursor-pointer'
      onClick={() => { closeModal(false) }}
    >
      <span className='text-6xl text-purple-500'>
        FINISH!
      </span>
      <span className='text-4xl text-white'>
        {renderTime(timer)}
      </span>
    </div>
  )
}
