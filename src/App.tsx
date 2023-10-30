import { useState, createContext } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import "./App.css";

import { ContentBlock, ContextState } from "./types";

import HomeView from "./views/HomeView";
import SearchView from "./views/SearchView";
import CalendarView from "./views/CalendarView";
import SettingsView from "./views/SettingsView";
import EditorView from './views/EditorView';

import { routerPaths } from "./utils";

const testBlocks: Array<ContentBlock> = [
  {
    id: "1",
    text: "Test note",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: "note",
  },
  {
    id: "2",
    text: "Another Test Note",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: "note",
  },
  {
    id: "3",
    text: "The bestest note out there",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: "note",
  },
];

export const Context = createContext<ContextState | undefined>(undefined);

function App() {
  const [blocks, setBlocks] = useState(testBlocks);
  const [
    homeViewDropdownId,
    setHomeViewDropdownId
  ] = useState<string | null>(null);

  const context: ContextState = {
    homeViewDropdownId,
    setHomeViewDropdownId,

    removeBlock: (block: ContentBlock): void => {
      if (block.id !== null) {
        setBlocks(
          blocks.filter(b => b.id !== block.id)
        );
      }
    },

    createBlock: (block: ContentBlock): void => {
      const newBlock: ContentBlock = {
        ...block,
        id: uuidv4(),
        createdAt: Date.now(),
      }

      setBlocks([...blocks, newBlock]);
    },

    updateBlock: (block: ContentBlock): void => {
      if (block.id !== null) {
        setBlocks(
          blocks.map(b => b.id === block.id ? block : b)
        )
      }
    },
  }

  return (
    <Context.Provider value={context}>
      <div className="app-container">
        <Routes>
          {/* Routes start with /inforium as a workaround for github pages */}
          <Route path={routerPaths.home} element={<HomeView blocks={blocks} />} />
          <Route path={routerPaths.search} element={<SearchView />} />
          <Route path={routerPaths.calendar} element={<CalendarView />} />
          <Route path={routerPaths.settings} element={<SettingsView />} />
          <Route path={routerPaths.editor} element={<EditorView />} />
        </Routes>
        <nav className="nav-bar">
          <ul>
            <li><Link to={routerPaths.home}>Home</Link></li>
            <li><Link to={routerPaths.search}>Search</Link></li>
            <li><Link to={routerPaths.calendar}>Calendar</Link></li>
            <li><Link to={routerPaths.settings}>Settings</Link></li>
          </ul>
        </nav>
      </div>
    </Context.Provider>
  )
}

export default App
