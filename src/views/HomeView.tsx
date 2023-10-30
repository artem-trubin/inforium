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
  const dropdownRef = useRef<HTMLUListElement>(null);
  const context = useContext<ContextState | undefined>(Context);

  useEffect(() => {
    if (scrollableViewRef.current) {
      const scrollableView = scrollableViewRef.current;
      scrollableView.scrollTop = scrollableView.scrollHeight;
    }

    const handleClickOutsideOfDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (context) context.setHomeViewDropdownId(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutsideOfDropdown);
  }, [context]);

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
      <BlockList blocks={props.blocks} dropdownRef={dropdownRef} />
    </div>
  )
}

export default HomeView
