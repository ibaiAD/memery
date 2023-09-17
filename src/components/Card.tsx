import { type Meme } from '../types'
import { type Action } from '../hooks/useCards'

interface Props {
  card: Meme
  index: number
  handleClick: ({ index, id }: { index: number, id: string }) => void
  dispatch: React.Dispatch<Action>
  blocked: boolean
}

export function Card ({ card, index, handleClick, dispatch, blocked }: Props) {
  const { id, url, name } = card

  const cardSideStyles: React.CSSProperties = {
    backfaceVisibility: 'hidden',
    transition: 'all .5s'
  }

  const rotate = () => {
    if (blocked) return
    if (card.correct) return
    if (card.rotated) return

    dispatch({ type: 'rotateOneCard', payload: index })
    handleClick({ index, id })
  }

  return (
    <article data-id={id} className="card relative drop-shadow-xl cursor-pointer" onClick={rotate}
      style={{ opacity: card.correct ? 0.1 : 1, perspective: '150rem' }}>
      <section style={{ ...cardSideStyles, transform: (card.rotated ?? false) ? 'rotateY(180deg)' : 'rotateY(0)' }} className="card--back h-full w-full absolute rounded-xl
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      </section>

      <section style={{ ...cardSideStyles, transform: (card.rotated ?? false) ? 'rotateY(0)' : 'rotateY(180deg)' }} className="card--front h-full w-full absolute flex justify-center bg-slate-700 rounded-xl">
        <img src={url} alt={name} className="rounded-xl block h-full aspect-auto" />
      </section>
    </article>
  )
}
