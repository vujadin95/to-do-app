import Note from "./Note";

function List({ noteList, setNoteList, isSorted, isModalOn, sortByPriority }) {
  // function that sorts all notes in noteList array according to priority

  // display all notes from noteList array
  const noteElement =
    noteList &&
    noteList.map((item) => {
      return (
        <Note
          setNoteList={setNoteList}
          noteList={noteList}
          key={item.id}
          note={item}
          isModalOn={isModalOn}
          sortByPriority={sortByPriority}
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
