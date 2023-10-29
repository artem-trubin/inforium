import { useContext } from "react";
import { Link } from "react-router-dom";

import { Block, ContextState } from "../types";

import { makeDateReadable, throwContextError, routerPaths } from '../utils';

import { Context } from '../App';

interface NoteCardProps {
  note: Block
}

// Should only be used in ul or ol lists.
const NoteCard = ({note}: NoteCardProps) => {
  const context = useContext<ContextState | undefined>(Context);

  if (context === undefined) {
    throwContextError('NoteCard');
    return null;
  }

  return (
    <li className="note-card">
      <div className="note-date">{makeDateReadable(note.createdAt)}</div>
      {/* <div className="note-text">{note.text}</div>
      <button onClick={() => context.removeBlock(note.id)}>Remove</button> */}
      <Link to={routerPaths.editor}>Edit</Link>
    </li>
  )
}

export default NoteCard
