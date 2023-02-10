import React, { useState } from "react";
import Note from "./Note";

export default function List({
  noteList,
  setNoteList,
  classLists,
  setIsSorted,
}) {
  const noteElement = noteList.map((item) => {
    return (
      <Note
        setNoteList={setNoteList}
        noteList={noteList}
        key={item.id}
        note={item}
        classLists={classLists}
        setIsSorted={setIsSorted}
      />
    );
  });

  return <div className="note-container">{noteElement}</div>;
}
