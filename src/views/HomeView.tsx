import { useEffect, useRef } from "react";

import NoteForm from "../components/NoteForm";
import NoteList from "../components/BlockList";

import { Block } from "../types";

interface HomeViewProps {
  blocks: Array<Block>,
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
      <NoteList notes={props.blocks} />
    </div>
  )
}

export default HomeView
