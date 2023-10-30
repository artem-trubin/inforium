import { RefObject } from "react";

export interface DropdownItem {
  text: string,
  onClick: () => void,
}

const Dropdown = ({ items, opened, dropdownRef }: {
  items: Array<DropdownItem>,
  opened: boolean,
  dropdownRef: RefObject<HTMLUListElement>,
}) => {
  return (
    <ul className={`dropdown ${
      opened ? 'shown' : 'hidden'
    }`} ref={dropdownRef}>
      {items.map((item, i) => <li key={i} className="dropdown-item">
        <button className="dropdown-button" onClick={item.onClick}>
          {item.text}
        </button>
      </li>)}
    </ul>
  );
}

export default Dropdown
