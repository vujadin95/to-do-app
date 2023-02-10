import React, { useState } from "react";
import Note from "./Note";

export default function List({ noteList, setNoteList }) {
  const noteElement = noteList.map((item) => {
    return (
      <Note
        setNoteList={setNoteList}
        noteList={noteList}
        key={item.id}
        note={item.text}
        id={item.id}
      />
    );
  });

  return <div className="note-container">{noteElement}</div>;
}
