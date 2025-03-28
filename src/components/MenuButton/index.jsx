import styles from './styles.module.css';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';

export default function MenuButton() {
  const { openModal, closeModal } = useActions();
  const isModalOpen = useAppSelector(state => state.modal.isModalOpen);
  return (
    <button
      className={styles.menuButton}
      onClick={() => (isModalOpen ? closeModal() : openModal())}
    >
      <span
        className={`${styles.menuButton__line} ${
          isModalOpen ? styles.menuButton__line_active : ''
        }`}
      ></span>
      <span
        className={`${styles.menuButton__line} ${
          isModalOpen ? styles.menuButton__line_active : ''
        }`}
      ></span>
      <span
        className={`${styles.menuButton__line} ${
          isModalOpen ? styles.menuButton__line_active : ''
        }`}
      ></span>
    </button>
  );
}
