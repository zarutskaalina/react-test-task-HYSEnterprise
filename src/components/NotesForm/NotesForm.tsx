import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./NotesForm.module.css";

export const NotesForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setIsFavorite(checked);
    } else {
      switch (name) {
        case "title":
          setTitle(value);
          break;
        case "description":
          setDescription(value);
          break;
        case "category":
          setCategory(value);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalNote = {
      id: nanoid(),
      title,
      category,
      description,
      createdAt: new Date(),
      isFavorite,
    };

    const action = { type: "notes/createNote", payload: finalNote };
    dispatch(action);

    setTitle("");
    setDescription("");
    setCategory("");
    setIsFavorite(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.notesForm}>
        <label className={styles.label}>
          <p>Title</p>
          <input
            className={styles.input}
            type="text"
            name="title"
            value={title}
            onChange={handleInputChange}
            placeholder="add title..."
            required
          />
        </label>

        <label className={styles.label}>
          <p>Category</p>
          <input
            className={styles.input}
            type="text"
            name="category"
            value={category}
            onChange={handleInputChange}
            placeholder="add category..."
            required
          />
        </label>

        <label className={styles.label}>
          <p>Description</p>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={handleInputChange}
            placeholder="add description..."
            required
          ></textarea>
        </label>

        <button type="submit" className={styles.submitButton}>
          Add note
        </button>
      </form>
    </div>
  );
};
