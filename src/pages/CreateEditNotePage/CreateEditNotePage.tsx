import { useDispatch } from "react-redux";
import { useState } from "react";
import { nanoid } from "nanoid";
import { NotesForm } from "../../components/NotesForm/NotesForm";

export const CreateEditNotePage: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

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
    <NotesForm
      title={title}
      category={category}
      description={description}
      setTitle={setTitle}
      setCategory={setCategory}
      setDescription={setDescription}
      onSubmit={handleSubmit}
    />
  );
};
