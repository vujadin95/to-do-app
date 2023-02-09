import React from "react";

export default function Input(props) {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Add new note"
        name="note"
        value={props.note.note}
        onChange={(e) => props.handleInputNote(e)}
        onFocus={() => props.setIsFocused(true)}
      />
    </div>
  );
}
