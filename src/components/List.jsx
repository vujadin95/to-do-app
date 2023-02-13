import Note from "./Note";

function List({ noteList, setNoteList, isSorted, setIsSorted, isModalOn }) {
  // function that sorts all notes in noteList array according to priority
  function sortByPriority() {
    // disable sorting if modal is active
    if (!isModalOn) {
      setNoteList((prevState) =>
        prevState.slice().sort((a, b) => {
          if (!a.isChecked && !b.isChecked) {
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
  // display all notes from noteList array
  const noteElement = noteList.map((item) => {
    return (
      <Note
        setNoteList={setNoteList}
        noteList={noteList}
        key={item.id}
        note={item}
        sortIfChecked={sortIfChecked}
        isModalOn={isModalOn}
      />
    );
  });
  // show 'sort by priority' only if there are more then two notes in noteList array and if isSorted state is false
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
