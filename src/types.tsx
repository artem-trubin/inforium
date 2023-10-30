interface Block {
  id: string | null,
  createdAt: number,
  lastEditedAt: number,
}

export interface NoteBlock extends Block {
  type: "note",
  text: string,
}

export interface Todo {
  text: string,
  done: boolean,
}

export interface TodoBlock extends Block {
  type: "todo",
  title: string,
  todos: Array<Todo>,
}

export type ContentBlock = NoteBlock | TodoBlock;

export type ContextState = {
  createBlock: (block: ContentBlock) => void,
  removeBlock: (block: ContentBlock) => void,
  updateBlock: (block: ContentBlock) => void,
}
