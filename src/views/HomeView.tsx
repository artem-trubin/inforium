import { useContext, useEffect, useRef } from "react";

import BlockList from "../components/BlockList";

import { ContentBlock, ContextState } from "../types";

import { Context } from "../App";
import { throwContextError } from "../utils";

interface HomeViewProps {
  blocks: Array<ContentBlock>,
}

const HomeView = (props: HomeViewProps) => {
  const scrollableViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableViewRef.current) {
      const scrollableView = scrollableViewRef.current;
      scrollableView.scrollTop = scrollableView.scrollHeight;
    }
  }, []);

  const context = useContext<ContextState | undefined>(Context);
  if (context === undefined) {
    throwContextError('HomeView');
    return null;
  }

  // TODO: remove reversing with css, just resort array of blocks by date
  return (
    <div className="home-container" ref={scrollableViewRef}>
      <button onClick={() => context.createBlock({
        type: "note",
        id: null,
        text: "TEST NOTE",
        createdAt: Date.now(),
        lastEditedAt: Date.now(),
      })}>Add test note</button>
      <BlockList blocks={props.blocks} />
    </div>
  )
}

export default HomeView
