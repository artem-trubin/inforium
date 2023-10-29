import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

import { Note } from "../types";

interface HomeViewProps {
  notes: Array<Note>,
}

const HomeView = (props: HomeViewProps) => {
  return (
    <>
      <NoteForm />
      <NoteList notes={props.notes} />
    </>
  )
}

export default HomeView
