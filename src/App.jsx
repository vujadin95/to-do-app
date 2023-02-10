import Input from "./components/Input";
import List from "./components/List";

import { useState } from "react";

function App() {
  const [noteList, setNoteList] = useState([]);
  console.log(noteList);

  return (
    <div className="container">
      <Input setNoteList={setNoteList} />
      <List noteList={noteList} setNoteList={setNoteList} />
    </div>
  );
}

export default App;
