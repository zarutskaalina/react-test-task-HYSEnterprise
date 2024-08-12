// import NotesPage from "./pages/NotesPage/NotesPage";
// import { Header } from "./components/Header/Header";

// export const App = () => {
//   return (
//     <div>
//       <Header title="Notes App" />
//       <NotesPage />;
//     </div>
//   );
// };

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateEditNotePage } from "./pages/CreateEditNotePage/CreateEditNotePage";
import NotesPage from "./pages/NotesPage/NotesPage";
import { Header } from "./components/Header/Header";

export const App: React.FC = () => {
  return (
    <Router basename="/react-test-task-HYSEnterprise">
      <Header title="Notes App" />
      <main>
        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="/create" element={<CreateEditNotePage />} />
        </Routes>
      </main>
    </Router>
  );
};
