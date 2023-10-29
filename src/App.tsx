import "./App.css";

import { Note } from "./types/Note";

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

function App() {
  return (
    <div className="app-container">
      <div>Hello world!</div>

      <NoteList notes={testNotes} />

      <nav className="nav-bar">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Calendar</li>
          <li>Settings</li>
        </ul>
      </nav>
    </div>
  )
}

export default App
