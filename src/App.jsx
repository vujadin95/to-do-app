import Input from "./components/Input";
import { useState } from "react";
function App() {
  const [note, setNote] = useState({ note: "" });
  const [isFocused, setIsFocused] = useState(false);
  console.log(note);

  function handleInputNote(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  return (
    <div className="container">
      <Input
        setIsFocused={setIsFocused}
        note={note}
        setNote={setNote}
        handleInputNote={handleInputNote}
      />
      {isFocused && (
        <>
          <p className="priority">Priority:</p>
          <button onClick={() => setIsFocused(false)} className="add-note-btn">
            Add Note
          </button>
        </>
      )}
    </div>
  );
}

export default App;
