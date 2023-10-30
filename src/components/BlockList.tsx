import { ContentBlock } from "../types";

import BlockCard from "./BlockCard";

const BlockList = ({ blocks }: { blocks: Array<ContentBlock> }) => {
  return (
    <ul>
      {blocks.map(block => <BlockCard key={block.id} block={block} />)}
    </ul>
  )
}

export default BlockList;
