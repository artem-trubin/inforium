import { useContext, useState } from 'react';
import { Context } from '../App';
import { throwContextError } from '../utils';

const NoteForm = () => {
  const [text, setText] = useState("");
  const context = useContext(Context);

  if (context === undefined) {
    throwContextError('NoteForm');
    return null;
  }

  const handleInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>
  ): void => setText(target.value);

  const handleSave = (event: React.FormEvent): void => {
    event.preventDefault();

    // Rework this
    // context.createBlock(text);
    setText('');
  }

  return (
    <form>
      <input value={text} onChange={handleInputChange} type="text" />
      <button onClick={handleSave}>Save</button>
    </form>
  )
}

export default NoteForm
