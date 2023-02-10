import React, { useState } from "react";

export default function Input({ setNoteList, noteList, classLists }) {
  const [isFocused, setIsFocused] = useState(false);
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState(0);

  function addNoteToList() {
    if (note) {
      setPriority(0);
      setIsFocused(false);
      setNote("");
      setNoteList((prevNoteList) => [
        ...prevNoteList,
        { id: prevNoteList.length + 1, text: note, priority: priority },
      ]);
    } else {
      alert("unesi belesku");
    }
  }

  function handleInputChange(e) {
    setNote(e.target.value);
  }

  function handlePriority(e) {
    e.target.classList.add(classLists[e.target.id]);
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
        <>
          <div className="priority-wrapper">
            <p> Priority:</p>
            <div onClick={handlePriority} className="check-priority-wrapper">
              <div className="priority blue" id="0"></div>
              <div className="priority " id="1"></div>
              <div className="priority " id="2"></div>
              <div className="priority " id="3"></div>
              <div className="priority " id="4"></div>
            </div>
          </div>
          <button onClick={addNoteToList} className="add-note-btn">
            Add Note
          </button>
        </>
      )}
    </div>
  );
}
