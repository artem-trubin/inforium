import { RefObject, useContext } from "react";
import { Link } from "react-router-dom";

import { ContentBlock, NoteBlock, ContextState } from "../types";
import { makeDateReadable, routerPaths, throwContextError } from "../utils";

import { Context } from '../App';
import Dropdown, { DropdownItem } from "./Dropdown";

const NoteCard = ({ note }: { note: NoteBlock }) => {
  return (
    <div className="note-block-content">
      <div className="note-block-text">{note.text}</div>
    </div>
  )
}

const BlockCard = ({ block, dropdownRef }: {
  block: ContentBlock,
  dropdownRef: RefObject<HTMLUListElement>,
}) => {
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

  const dropdownItems: Array<DropdownItem> = [
    {
      text: "Edit",
      onClick: () => console.log("Edit clicked"),
    },
    {
      text: "Delete",
      onClick: () => context.removeBlock(block),
    },
  ];

  return (
    <li className="block-card">
      <div className="block-utility">
        <div className="block-date">{makeDateReadable(block.createdAt)}</div>
        <button
          className="block-more"
          onClick={() => context.setHomeViewDropdownId(block.id)}
        >
        </button>
        <Dropdown
          items={dropdownItems}
          opened={block.id === context.homeViewDropdownId}
          dropdownRef={dropdownRef}
        />
      </div>
      {card}
      <Link to={routerPaths.editor}>Edit</Link>
      <button onClick={() => context.removeBlock(block)}>Remove</button>
    </li>
  )
}

export default BlockCard
