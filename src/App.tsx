import { useState, createContext } from "react";

import "./App.css";

import { Note, ContextState } from "./types";

import NoteList from "./components/NoteList";

const testNotes: Array<Note> = [
  {
    id: "1",
    text: "Test note",
    createdAt: Date.now(),
  },
  {
    id: "2",
    text: "Another Test Note",
    createdAt: Date.now(),
  },
  {
    id: "3",
    text: "The bestest note out there",
    createdAt: Date.now(),
  },
];

export const Context = createContext<ContextState | undefined>(undefined);

function App() {
  const [notes, setNotes] = useState(testNotes);

  const removeNote = (id: string): void => {
    const newNotes = notes.filter(n => n.id !== id);
    setNotes(newNotes);
  }

  const context: ContextState = {
    removeNote,
  }

  return (
    <Context.Provider value={context}>
      <div className="app-container">
        <div>Hello world!</div>

        <NoteList notes={notes} />

        <nav className="nav-bar">
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Calendar</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
    </Context.Provider>
  )
}

export default App
