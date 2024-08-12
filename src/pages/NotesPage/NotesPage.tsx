import { NotesList } from "../../components/NotesList/NotesList";
import { FilterSortBar } from "../../components/FiterSortBar/FilterSortBar";
import styles from "./NotesPage.module.css";

const NotesPage = () => {
  return (
    <div className={styles.notesPageWrapper}>
      <FilterSortBar />
      <NotesList />
    </div>
  );
};

export default NotesPage;
