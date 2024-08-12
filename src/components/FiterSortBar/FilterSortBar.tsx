import styles from "./FiterSortBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const FilterSortBar = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notesBox.notes);

  // Отримання категорій з нотаток
  const categories = notes.map((note) => note.category);

  // Отримання унікальних категорій
  const uniqueCategories = Array.from(new Set(categories));

  const handleCategoryClick = (category: string) => {
    const action = { type: "filter/setCategory", payload: category };
    dispatch(action);
  };

  return (
    <aside className={styles.sideBar}>
      <div className={styles.filterSortBar}>
        <ul className={styles.categoryList}>
          {uniqueCategories.map((category) => (
            <li key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </li>
          ))}
          <li onClick={() => handleCategoryClick("")}>All</li>
        </ul>
      </div>
    </aside>
  );
};
