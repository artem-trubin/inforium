import { useContext } from "react";

import { Context } from "../App";
import { throwContextError } from "../utils";

const EditorView = () => {
  const context = useContext(Context);

  if (!context) {
    throwContextError("EditorView");
    return null;
  }

  // switch (block.type) {
  //   case "note": {
  //     return <NoteBlockEditor />
  //   }
  //   case "todo": {
  //     return <TodoBlockEditor />
  //   }
  // }
}

const NoteBlockEditor = () => {
  return (
    <div>
      This is note editor
    </div>
  )
}

const TodoBlockEditor = () => {
  return (
    <div>
      This is a todo editor
    </div>
  )
}

export default EditorView
