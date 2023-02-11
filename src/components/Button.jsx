import React from "react";

export default function Button({ handlePriority, addNoteToList }) {
  return (
    <>
      <div className="priority-wrapper">
        <p> Priority:</p>
        <div onClick={handlePriority} className="check-priority-wrapper">
          <div className="priority blue" id="0"></div>
          <div className="priority green" id="1"></div>
          <div className="priority yellow" id="2"></div>
          <div className="priority orange" id="3"></div>
          <div className="priority red" id="4"></div>
        </div>
      </div>
      <button onClick={addNoteToList} className="add-note-btn">
        Add Note
      </button>
    </>
  );
}
