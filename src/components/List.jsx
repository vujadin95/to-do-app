import React, { useState } from "react";
import { RiContactsBook2Fill } from "react-icons/ri";
import Note from "./Note";

export default function List({ noteList, setNoteList, isSorted, setIsSorted }) {
  function sortByPriority() {
    setNoteList((prevState) =>
      prevState.slice().sort((a, b) => b.priority - a.priority)
    );
    setIsSorted(true);
  }

  const noteElement = noteList.map((item) => {
    return (
      <Note
        setNoteList={setNoteList}
        noteList={noteList}
        key={item.id}
        note={item}
        setIsSorted={setIsSorted}
      />
    );
  });

  return (
    <div className="note-container">
      {noteList.length > 1 && !isSorted && (
        <p className="sort-text" onClick={sortByPriority}>
          Sort by Priority
        </p>
      )}
      {noteElement}
    </div>
  );
}
