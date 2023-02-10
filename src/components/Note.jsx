import React, { useState } from "react";
import {
  RiDeleteBin2Line,
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";

export default function Note(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [deleteNote, setDeleteNote] = useState(false);
  const [hovered, setHovered] = useState(false);
  console.log(props.noteList);

  const checkBoxElement = isChecked ? (
    <RiCheckboxCircleFill
      onClick={() => setIsChecked((prevState) => !prevState)}
      className="checkBullet"
    />
  ) : (
    <RiCheckboxBlankCircleFill
      onClick={() => setIsChecked((prevState) => !prevState)}
      className="checkBullet"
    />
  );
  function deleteNoteFromList(id) {
    console.log(id);
    props.setNoteList((prevState) =>
      prevState.filter((note) => note.id !== id)
    );
  }

  return (
    <div className={`note ${isChecked && "crosNote"}`}>
      {checkBoxElement}
      <p className="note-text">{props.note}</p>
      <RiDeleteBin2Line
        onClick={() => deleteNoteFromList(props.id)}
        className="deleteBin"
      />
    </div>
  );
}
