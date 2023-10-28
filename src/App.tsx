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
    <div>
      <div>Hello world!</div>

      <ul>
        {testNotes.map(note => <li>{note.text}</li>)}
      </ul>
    </div>
  )
}

export default App
