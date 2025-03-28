import styles from './styles.module.css';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

export default function Modal({ content }) {
  const isModalOpened = useAppSelector(state => state.modal.isModalOpen);
  const { closeModal } = useActions();

  function handleCloseModal() {
    closeModal();
  }

  return (
    <div
      className={`${styles.modal} ${
        isModalOpened === true && `${styles.modal_active}`
      }`}
    >
      <div
        className={`${styles.modal__overlay} ${
          isModalOpened === true && `${styles.modal__overlay_active}`
        }`}
        onClick={handleCloseModal}
      ></div>
      <div className={styles.modal__content}>{content}</div>
    </div>
  );
}
