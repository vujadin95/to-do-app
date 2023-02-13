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
    noteList.length === 0 &&
      setNoteList(JSON.parse(localStorage.getItem("userNotes")));
  }, []);
  // update localStorage when noteList array changes
  useEffect(() => {
    localStorage.setItem("userNotes", JSON.stringify(noteList));
  }, [noteList]);

  return (
    <div className="todo-container">
      {isModalOn && <Modal setIsModalOn={setIsModalOn} />}
      <img src={Logo} className="todo-logo" alt="todo logo" />
      <Input
        setIsModalOn={setIsModalOn}
        isModalOn={isModalOn}
        setIsSorted={setIsSorted}
        setNoteList={setNoteList}
      />
      <List
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        noteList={noteList}
        setNoteList={setNoteList}
        isModalOn={isModalOn}
      />
    </div>
  );
}

export default App;
