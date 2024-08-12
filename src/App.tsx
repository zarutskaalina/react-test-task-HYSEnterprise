import NotesPage from "./pages/NotesPage/NotesPage";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <div>
      <Header title="Notes App" />
      <NotesPage />;
    </div>
  );
};
