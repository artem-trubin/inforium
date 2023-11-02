import { useContext } from "react";

import { Context } from "../App";
import { throwContextError } from "../utils";
import { NoteBlock, TodoBlock } from "../types";

const EditorView = () => {
  const context = useContext(Context);

  if (!context) {
    throwContextError("EditorView");
    return null;
  }

  const currentBlock = context.currentBlockForEditor;

  if (!currentBlock) {
    return null; // TODO: make redirect to home view
  }

  switch (currentBlock.type) {
    case "note": {
      return <NoteBlockEditor note={currentBlock} />
    }
    case "todo": {
      return <TodoBlockEditor todo={currentBlock} />
    }
  }
}

const NoteBlockEditor = ({ note }: { note: NoteBlock }) => {
  return (
    <div>
      { note.text }
    </div>
  )
}

const TodoBlockEditor = ({ todo }: { todo: TodoBlock }) => {
  return (
    <div>
      { todo.title }
    </div>
  )
}

export default EditorView
