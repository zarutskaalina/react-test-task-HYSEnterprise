import styles from "./FiterSortBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// import { useNavigate } from "react-router-dom";

export const FilterSortBar: React.FC = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const notes = useSelector((state: RootState) => state.notesBox.notes);

  const categories = notes.map((note) => note.category);
  const uniqueCategories = Array.from(new Set(categories));

  const handleCategoryClick = (category: string) => {
    const action = { type: "filter/setCategory", payload: category };
    dispatch(action);

    // navigate(`/filter/${category}`);
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
