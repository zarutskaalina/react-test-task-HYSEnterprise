import styles from "./Header.module.css";
import { useState } from "react";
import { NotesForm } from "../NotesForm/NotesForm";

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <header className={styles.headerContaine}>
      {title && <a href="/">{title}</a>}
      {children}

      <button onClick={openModal} className={styles.openModalButton}>
        +
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className={styles.closeButton}>
              Close
            </button>
            <NotesForm />
          </div>
        </div>
      )}
    </header>
  );
};
