import { Note, ContextState } from "../types";

import { makeDateReadable, throwContextError } from '../utils';

import { Context } from '../App';
import { useContext } from "react";

interface NoteCardProps {
  note: Note
}

// Should only be used in ul or ol lists.
const NoteCard = ({note}: NoteCardProps) => {
  const context = useContext<ContextState | undefined>(Context);

  if (context === undefined) {
    throwContextError('NoteCard');
    return null;
  }

  return (
    <li>{note.text} {makeDateReadable(note.createdAt)}<button onClick={() => context.removeNote(note.id)}>Remove</button></li>
  )
}

export default NoteCard
