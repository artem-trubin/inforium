import { useContext } from "react";
import { Link } from "react-router-dom";

import { ContentBlock, NoteBlock, ContextState } from "../types";
import { makeDateReadable, routerPaths, throwContextError } from "../utils";

import { Context } from '../App';

const NoteCard = ({ note }: { note: NoteBlock }) => {
  return (
    <div className="note-block-content">
      <div className="note-block-text">{note.text}</div>
    </div>
  )
}

interface BlockCardProps {
  block: ContentBlock
}
const BlockCard = ({ block }: BlockCardProps) => {
  const context = useContext<ContextState | undefined>(Context);
  if (context === undefined) {
    throwContextError('NoteCard');
    return null;
  }

  let card: JSX.Element | null = null;

  // TODO: make constants with block types
  if (block.type === "note") {
    card = <NoteCard note={block} />;
  }

  return (
    <li className="block-card">
      <div className="block-utility">
        <div className="block-date">{makeDateReadable(block.createdAt)}</div>
        <div className="block-more"></div>
      </div>
      {card}
      <Link to={routerPaths.editor}>Edit</Link>
      <button onClick={() => context.removeBlock(block)}>Remove</button>
    </li>
  )
}

export default BlockCard
