import Note from "./Note";

function List({ noteList, setNoteList, isSorted, setIsSorted }) {
  //
  function sortByPriority() {
    setNoteList((prevState) =>
      prevState.slice().sort((a, b) => {
        if (!a.isChecked && !b.isChecked) {
          return b.priority - a.priority;
        }
      })
    );
    setIsSorted(true);
  }

  function sortIfChecked() {
    setNoteList((prevState) =>
      prevState.slice().sort((a, b) => a.isChecked - b.isChecked)
    );
    setIsSorted(false);
  }

  const noteElement = noteList.map((item) => {
    return (
      <Note
        setNoteList={setNoteList}
        noteList={noteList}
        key={item.id}
        note={item}
        sortIfChecked={sortIfChecked}
      />
    );
  });

  return (
    <div className="list-container">
      {noteList.length > 1 && !isSorted && (
        <p className="sort-text" onClick={sortByPriority}>
          Sort by Priority
        </p>
      )}
      {noteElement}
    </div>
  );
}
export default List;
