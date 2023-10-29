import { Block } from "../types";

import NoteCard from "./BlockCard";

interface NoteListProps {
  notes: Array<Block>,
}

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <ul>
      {notes.map(note => <NoteCard key={note.id} note={note} />)}
    </ul>
  )
}

export default NoteList;
