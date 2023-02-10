import Input from "./components/Input";
import List from "./components/List";

import { useState, useEffect } from "react";

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

  const classLists = {
    0: "blue",
    1: "green",
    2: "yellow",
    3: "orange",
    4: "red",
  };
  console.log(noteList);

  function sortByPriority() {
    setNoteList((prevState) =>
      prevState.slice().sort((a, b) => b.priority - a.priority)
    );
    setIsSorted(true);
  }
  return (
    <div className="container">
      <img src="/src/assets/todo.svg" className="logo" />
      <Input
        classLists={classLists}
        noteList={noteList}
        setNoteList={setNoteList}
      />
      {noteList.length > 1 && !isSorted && (
        <p onClick={sortByPriority}>Sort by Priority</p>
      )}
      <List
        setIsSorted={setIsSorted}
        classLists={classLists}
        noteList={noteList}
        setNoteList={setNoteList}
      />
    </div>
  );
}

export default App;
