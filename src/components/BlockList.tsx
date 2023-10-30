import { RefObject } from "react";
import { ContentBlock } from "../types";

import BlockCard from "./BlockCard";

const BlockList = ({ blocks, dropdownRef }: {
  blocks: Array<ContentBlock>,
  dropdownRef: RefObject<HTMLUListElement>,
}) => {
  return (
    <ul>
      {blocks.map(block => <BlockCard
        key={block.id}
        block={block}
        dropdownRef={dropdownRef}
      />)}
    </ul>
  )
}

export default BlockList;
