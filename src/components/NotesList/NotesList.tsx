import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./NotesList.module.css";

export const NotesList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notesBox.notes);

  const selectedCategory = useSelector(
    (state: RootState) => state.filter.category
  );

  const filteredNotes = selectedCategory
    ? notes.filter((note) => note.category === selectedCategory)
    : notes;

  const dispatch = useDispatch();

  const handleDeletedNote = (noteId: string) => {
    const action = { type: "notes/deletedNote", payload: noteId };
    dispatch(action);
  };

  return (
    <div className={styles.notesListContainer}>
      <ul className={styles.notesList}>
        {filteredNotes.map((note) => (
          <li key={note.id} className={styles.notesListItem}>
            <h2> {note.title}</h2>
            <h3> {note.category}</h3>
            <p>{note.description}</p>
            <p> Created on: {new Date(note.createdAt).toLocaleString()}</p>
            <button type="button" onClick={() => handleDeletedNote(note.id)}>
              Deleted
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
