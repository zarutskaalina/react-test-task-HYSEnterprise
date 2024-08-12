interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
}

interface NotesState {
  notes: Note[];
}

//початковий стан
const initialState: NotesState = {
  notes: [],
};

export const notesReducer = (
  state = initialState,
  action: { type: string; payload: any }
): NotesState => {
  switch (action.type) {
    case "notes/createNote": {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    case "notes/deletedNote": {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
