import React, { useState } from "react";
import { nanoid } from "nanoid";
import Button from "./Button";

function Input({ setNoteList, setIsSorted }) {
  const [isFocused, setIsFocused] = useState(false);
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState(0);

  function addNoteToList() {
    if (note) {
      setIsSorted(false);
      setPriority(0);
      setIsFocused(false);
      setNoteList((prevNoteList) => [
        ...prevNoteList,
        { id: nanoid(), text: note, isChecked: false, priority: priority },
      ]);
      setNote("");
    } else {
      alert("unesi belesku");
    }
  }

  function handlePriority(e) {
    setPriority(e.target.id);
  }

  return (
    <div className="input-container">
      <input
        className="input-text"
        type="text"
        placeholder="Add new note"
        name="note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onFocus={() => setIsFocused(true)}
      />
      {isFocused && (
        <Button handlePriority={handlePriority} addNoteToList={addNoteToList} />
      )}
    </div>
  );
}
export default Input;
