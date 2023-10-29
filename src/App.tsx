import { useState, createContext } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import "./App.css";

import { Note, ContextState } from "./types";

import HomeView from "./views/HomeView";
import SearchView from "./views/SearchView";
import CalendarView from "./views/CalendarView";
import SettingsView from "./views/SettingsView";

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

  const context: ContextState = {
    removeNote: (id: string): void => {
      const newNotes = notes.filter(n => n.id !== id);
      setNotes(newNotes);
    },

    saveNote: (text: string): void => {
      const newNote: Note = {
        id: uuidv4(),
        text: text,
        createdAt: Date.now(),
      }

      setNotes([...notes, newNote]);
    },
  }

  return (
    <Context.Provider value={context}>
      <div className="app-container">
        <Routes>
          {/* Routes start with /inforium as a workaround for github pages */}
          <Route path="/inforium/" element={<HomeView notes={notes} />} />
          <Route path="/inforium/search" element={<SearchView />} />
          <Route path="/inforium/calendar" element={<CalendarView />} />
          <Route path="/inforium/settings" element={<SettingsView />} />
        </Routes>
        <nav className="nav-bar">
          <ul>
            <li><Link to="/inforium/">Home</Link></li>
            <li><Link to="/inforium/search">Search</Link></li>
            <li><Link to="/inforium/calendar">Calendar</Link></li>
            <li><Link to="/inforium/settings">Settings</Link></li>
          </ul>
        </nav>
      </div>
    </Context.Provider>
  )
}

export default App
