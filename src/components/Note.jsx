import React, { useState } from "react";
import {
  RiDeleteBin2Line,
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
  RiDeleteBin2Fill,
} from "react-icons/ri";

export default function Note(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const classLists = {
    0: "blue",
    1: "green",
    2: "yellow",
    3: "orange",
    4: "red",
  };

  function handleCheckBox() {
    setIsChecked((prevState) => !prevState);
  }

  function deleteNoteFromList(id) {
    props.setNoteList((prevState) =>
      prevState.filter((note) => note.id !== id)
    );
  }
  const deleteBinElement = isHovered ? (
    <RiDeleteBin2Fill />
  ) : (
    <RiDeleteBin2Line />
  );
  return (
    <div
      className={`note ${classLists[props.note.priority]} ${
        isChecked && "crosNote"
      }`}
    >
      <div onClick={handleCheckBox} className="checkBullet">
        {isChecked ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleFill />}
      </div>
      <p className="note-text">{props.note.text}</p>

      <div
        onClick={() => deleteNoteFromList(props.note.id)}
        className="deleteBin"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {deleteBinElement}
      </div>
    </div>
  );
}
