import { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";
import Modal from "./components/Modal";
import Logo from "./images/logo.png";

function App() {
  const [noteList, setNoteList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);

  // if noteList is empty on first page loading, get data from localStorage if exist
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userNotes")) === null) {
      setNoteList([]);
    } else {
      setNoteList(JSON.parse(localStorage.getItem("userNotes")));
    }
  }, []);
  // update localStorage when noteList array changes
  useEffect(() => {
    localStorage.setItem("userNotes", JSON.stringify(noteList));
  }, [noteList]);

  // disable sorting if modal is active

  function sortByPriority() {
    if (!isModalOn) {
      setNoteList((prevState) =>
        prevState.slice().sort((a, b) => {
          if (a.isChecked || b.isChecked) {
            return a.isChecked - b.isChecked;
          } else if (!a.isChecked && !b.isChecked) {
            return b.priority - a.priority;
          }
        })
      );
      setIsSorted((prevState) => !prevState);
    }
  }
  // function that sorts all notes in noteList array that take in consideration isChecked state
  function sortIfChecked() {
    setNoteList((prevState) =>
      prevState.slice().sort((a, b) => a.isChecked - b.isChecked)
    );
    setIsSorted((prevState) => !prevState);
  }
  return (
    <div className="todo-container">
      {isModalOn && <Modal setIsModalOn={setIsModalOn} />}
      <img src={Logo} className="todo-logo" alt="todo logo" />
      <Input
        setIsModalOn={setIsModalOn}
        isModalOn={isModalOn}
        setIsSorted={setIsSorted}
        setNoteList={setNoteList}
        sortIfChecked={sortIfChecked}
      />
      <List
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        noteList={noteList}
        setNoteList={setNoteList}
        isModalOn={isModalOn}
        sortByPriority={sortByPriority}
        sortIfChecked={sortIfChecked}
      />
    </div>
  );
}

export default App;
