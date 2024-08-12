import styles from "./Header.module.css";
import { useState } from "react";
import { CreateEditNotePage } from "../../pages/CreateEditNotePage/CreateEditNotePage";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, children }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <header className={styles.headerContaine}>
      <ul>
        <li>{title && <Link to="/">{title}</Link>}</li>
        <li>
          {children}
          <Link to="/create">
            <button onClick={openModal} className={styles.openModalButton}>
              +
            </button>
          </Link>
        </li>
      </ul>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className={styles.closeButton}>
              Close
            </button>
            <CreateEditNotePage />
          </div>
        </div>
      )}
    </header>
  );
};
