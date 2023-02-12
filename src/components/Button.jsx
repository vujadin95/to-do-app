import React from "react";

export default function Button({ handlePriority, addNoteToList }) {
  return (
    <>
      <div className="priority-container">
        <p> Priority:</p>
        <div onClick={handlePriority} className="priority-wrapper">
          <div className="priority-picker blue" id="0"></div>
          <div className="priority-picker green" id="1"></div>
          <div className="priority-picker yellow" id="2"></div>
          <div className="priority-picker orange" id="3"></div>
          <div className="priority-picker red" id="4"></div>
        </div>
      </div>
      <button onClick={addNoteToList} className="add-note-btn">
        Add Note
      </button>
    </>
  );
}
