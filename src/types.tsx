export type Note = {
  id: string,
  text: string,
  createdAt: number,
}

export type ContextState = {
  removeNote: (id: string) => void,
}
