import React, { useState } from "react";
import {
  RiDeleteBin2Line,
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
  RiDeleteBin2Fill,
} from "react-icons/ri";

function Note(props) {
  const [isHovered, setIsHovered] = useState(false);
  // object is needed for assigning classes according to color of selected priority
  const classLists = {
    0: "blue",
    1: "green",
    2: "yellow",
    3: "orange",
    4: "red",
  };
  // function that deletes selected note from noteList array
  function deleteNoteFromList(id) {
    if (!props.isModalOn) {
      props.setNoteList((prevState) =>
        prevState.filter((note) => note.id !== id)
      );
    }
  }
  // function that changing state of isChecked property from noteList array
  function handleCheck(id) {
    // disable check icon if modal is active
    if (!props.isModalOn) {
      props.setNoteList((prevState) => {
        return prevState.map((item) =>
          item.id === id ? { ...item, isChecked: !item.isChecked } : item
        );
      });
      // sort noteList array according to isChecked property
      props.sortByPriority();
    }
  }
  return (
    <div
      className={`note-item ${classLists[props.note.priority]} ${
        props.note.isChecked && "crosNote"
      }`}
    >
      <div onClick={() => handleCheck(props.note.id)} className="checkBullet">
        {props.note.isChecked ? (
          <RiCheckboxCircleFill />
        ) : (
          <RiCheckboxBlankCircleFill />
        )}
      </div>
      <p className="note-text">{props.note.text}</p>
      <div
        className="deleteBin"
        onClick={() => deleteNoteFromList(props.note.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <RiDeleteBin2Fill /> : <RiDeleteBin2Line />}
      </div>
    </div>
  );
}
export default Note;
