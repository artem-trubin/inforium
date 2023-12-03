import { useContext, useState, ChangeEvent } from "react";

import { Context } from "../App";
import { routerPaths, throwContextError } from "../utils";
import { ContextState, NoteBlock, TodoBlock } from "../types";
import { useNavigate } from "react-router-dom";

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
  const context = useContext<ContextState | undefined>(Context);

  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteText, setNoteText] = useState(note.text);

  const navigate = useNavigate();

  if (context === undefined) {
    throwContextError('HomeView');
    return null;
  }

  const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNoteTitle(event.target.value);
  }

  const handleTextInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(event.target.value);
  }

  const onSave = () => {
    const updatedBlock: NoteBlock = {
      ...note,
      title: noteTitle,
      text: noteText,
    };

    context.updateBlock(updatedBlock);

    navigate(routerPaths.home);
  }

  return (
    <div className="editor-container">
      <header className="editor-header">Here will be header with indicators</header>
      <form className="editor-form">
        <input
          className="editor-title"
          type="text"
          onChange={handleTitleInput}
          value={noteTitle}
        />

        <textarea
          className="editor-text"
          onChange={handleTextInput}
          value={noteText}
        ></textarea>

        <button className="editor-save" type="button" onClick={onSave}>Save</button>
      </form>
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
