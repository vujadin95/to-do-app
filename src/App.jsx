import Input from "./components/Input";
import List from "./components/List";
import { useState, useEffect } from "react";
import Logo from "./images/logo.png";

function App() {
  const [noteList, setNoteList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    noteList.length === 0 &&
      setNoteList(JSON.parse(localStorage.getItem("userNotes")));
  }, []);

  useEffect(() => {
    localStorage.setItem("userNotes", JSON.stringify(noteList));
  }, [noteList]);

  return (
    <div className="todo-container">
      <img src={Logo} className="todo-logo" alt="todo logo" />
      <Input setIsSorted={setIsSorted} setNoteList={setNoteList} />
      <List
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        noteList={noteList}
        setNoteList={setNoteList}
      />
    </div>
  );
}

export default App;
