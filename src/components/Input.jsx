import React, { useState } from "react";
import { nanoid } from "nanoid";
import Button from "./Button";

function Input({
  setNoteList,
  setIsSorted,
  setIsModalOn,
  isModalOn,
  sortIfChecked,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState(0);

  // function that add new note to noteList array, resets priority, delete input value after note is added to noteList array and if input is empty when user clicks on the button to add note to noteList array it enables modal to show to the page
  function addNoteToList() {
    if (note) {
      setIsSorted(false);
      setPriority(0);
      setIsFocused(false);
      setNoteList((prevNoteList) => [
        ...prevNoteList,
        { id: nanoid(), text: note, isChecked: false, priority: priority },
      ]);
      sortIfChecked();
      setIsSorted((prevState) => !prevState);
      setNote("");
    } else {
      setIsModalOn(true);
    }
  }
  // function that assign priority to noteList array
  function handlePriority(e) {
    // disable priority assigning if modal is active
    if (!isModalOn) return setPriority(e.target.id);
  }

  return (
    <div className="input-container">
      <input
        disabled={isModalOn}
        className="input-text"
        type="text"
        placeholder="Add new note"
        name="note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onFocus={() => setIsFocused(true)}
      />
      {isFocused && (
        <Button
          disabled={isModalOn}
          handlePriority={handlePriority}
          addNoteToList={addNoteToList}
        />
      )}
    </div>
  );
}
export default Input;
