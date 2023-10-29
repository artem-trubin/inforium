import { useEffect, useRef } from "react";

import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

import { Note } from "../types";

interface HomeViewProps {
  notes: Array<Note>,
}

const HomeView = (props: HomeViewProps) => {
  const scrollableViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableViewRef.current) {
      const scrollableView = scrollableViewRef.current;
      scrollableView.scrollTop = scrollableView.scrollHeight;
    }
  }, []);

  return (
    <div className="home-container" ref={scrollableViewRef}>
      <NoteForm />
      <NoteList notes={props.notes} />
    </div>
  )
}

export default HomeView
