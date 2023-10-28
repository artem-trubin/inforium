import "./App.css";

type Note = {
  id: string,
  text: string,
}

const testNotes: Array<Note> = [
  {
    id: "1",
    text: "Test note",
  },
  {
    id: "2",
    text: "Another Test Note",
  },
  {
    id: "3",
    text: "The bestest note out there",
  },
];

function App() {
  return (
    <div className="app-container">
      <div>Hello world!</div>

      <ul>
        {testNotes.map(note => <li>{note.text}</li>)}
      </ul>

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
