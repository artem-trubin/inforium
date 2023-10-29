import { Note } from "../types";

import NoteCard from "./NoteCard";

interface NoteListProps {
  notes: Array<Note>,
}

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <ul>
      {notes.map(note => <NoteCard key={note.id} note={note} />)}
    </ul>
  )
}

export default NoteList;
