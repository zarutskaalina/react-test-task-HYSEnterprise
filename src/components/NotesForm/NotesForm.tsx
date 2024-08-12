import styles from "./NotesForm.module.css";

interface NotesFormProps {
  title: string;
  category: string;
  description: string;
  setTitle: (value: string) => void;
  setCategory: (value: string) => void;
  setDescription: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const NotesForm: React.FC<NotesFormProps> = ({
  title,
  category,
  description,
  setTitle,
  setCategory,
  setDescription,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.notesForm}>
      <label className={styles.label}>
        <p>Title</p>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
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
          onChange={(e) => {
            setCategory(e.target.value);
          }}
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
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="add description..."
          required
        ></textarea>
      </label>

      <button type="submit" className={styles.submitButton}>
        Add note
      </button>
    </form>
  );
};
