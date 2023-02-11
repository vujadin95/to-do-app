import React, { useState } from "react";
import { nanoid } from "nanoid";
import Button from "./Button";

export default function Input({ setNoteList, setIsSorted }) {
  const [isFocused, setIsFocused] = useState(false);
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState(0);

  function addNoteToList() {
    if (note) {
      setIsSorted(false);
      setPriority(0);
      setIsFocused(false);
      setNote("");
      setNoteList((prevNoteList) => [
        ...prevNoteList,
        { id: nanoid(), text: note, priority: priority },
      ]);
    } else {
      alert("unesi belesku");
    }
  }

  function handleInputChange(e) {
    setNote(e.target.value);
  }

  function handlePriority(e) {
    setPriority(e.target.id);
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Add new note"
        name="note"
        value={note}
        onChange={(e) => handleInputChange(e)}
        onFocus={() => setIsFocused(true)}
      />
      {isFocused && (
        <Button handlePriority={handlePriority} addNoteToList={addNoteToList} />
      )}
    </div>
  );
}
