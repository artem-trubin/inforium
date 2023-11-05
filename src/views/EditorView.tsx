import { useContext, useState, ChangeEvent } from "react";

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
  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteText, setNoteText] = useState(note.text);

  const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNoteTitle(event.target.value);
  }

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNoteText(event.target.value);
  }

  // TODO: add form for inputs
  return (
    <div>
      <input
        type="text"
        onChange={handleTitleInput}
        value={noteTitle}
      />

      <input
        type="textarea"
        onChange={handleTextInput}
        value={noteText}
      />
    </div>
  )
}

const TodoBlockEditor = ({ todo }: { todo: TodoBlock }) => {
  // TODO: finish editor for todos
  return (
    <div>
      { todo.title }
    </div>
  )
}

export default EditorView
