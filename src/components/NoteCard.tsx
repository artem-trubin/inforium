import { Note } from "../types/Note";

import { makeDateReadable } from '../utils';

interface NoteCardProps {
  note: Note
}

// Should only be used in ul or ol lists.
const NoteCard = ({note}: NoteCardProps) => {
  return (
    <li>{note.text} {makeDateReadable(note.createdAt)}</li>
  )
}

export default NoteCard
