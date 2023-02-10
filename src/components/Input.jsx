import React, { useState } from "react";

export default function Input({ setNoteList }) {
  const [isFocused, setIsFocused] = useState(false);
  const [note, setNote] = useState("");

  const classLists = {
    0: "blue",
    1: "green",
    2: "yellow",
    3: "orange",
    4: "red",
  };

  console.log(note);

  function addNoteToList() {
    if (note) {
      setIsFocused(false);
      setNote("");
      setNoteList((prevNoteList) => [
        ...prevNoteList,
        { id: prevNoteList.length + 1, text: note, priority: 0 },
      ]);
    } else {
      alert("unesi belesku");
    }
  }

  function handleChange(e) {
    setNote(e.target.value);
  }
  function handlePriority(e) {
    console.log(e.target.id);
    e.target.classList.add(classLists[e.target.id]);
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Add new note"
        name="note"
        value={note}
        onChange={(e) => handleChange(e)}
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
