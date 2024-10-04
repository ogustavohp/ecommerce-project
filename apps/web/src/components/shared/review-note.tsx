import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from '@tabler/icons-react'

interface ReviewNoteProps {
  note: number
  size?: number
}

export function ReviewNote({ note, size }: ReviewNoteProps) {
  function NoteForStars(note: number) {
    const starts = []
    for (let i = 1; i <= 5; i++) {
      if (note >= i) {
        starts.push(<IconStarFilled size={size ?? 12} />)
      } else if (note >= i - 0.5) {
        starts.push(<IconStarHalfFilled size={size ?? 12} />)
      } else {
        starts.push(<IconStar size={size ?? 12} />)
      }
    }
    return starts
  }

  return (
    <div className="flex gap-0.5 text-emerald-400">{NoteForStars(note)}</div>
  )
}
