import React, { useState } from "react";
import {
  RiDeleteBin2Line,
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";

export default function Note(props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckBox() {
    setIsChecked((prevState) => !prevState);
  }
  const checkBoxElement = isChecked ? (
    <RiCheckboxCircleFill onClick={handleCheckBox} className="checkBullet" />
  ) : (
    <RiCheckboxBlankCircleFill
      onClick={handleCheckBox}
      className="checkBullet"
    />
  );

  function deleteNoteFromList(id) {
    props.setNoteList((prevState) =>
      prevState.filter((note) => note.id !== id)
    );
  }

  return (
    <div
      className={`note ${props.classLists[props.note.priority]} ${
        isChecked && "crosNote"
      }`}
    >
      {checkBoxElement}
      <p className="note-text">{props.note.text}</p>
      <RiDeleteBin2Line
        onClick={() => deleteNoteFromList(props.note.id)}
        className="deleteBin"
      />
    </div>
  );
}
