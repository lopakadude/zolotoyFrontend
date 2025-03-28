import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import ArrowLeft from '../../assets/system/ArrowLeft';

export default function BackTo() {
  const navigate = useNavigate();

  return (
      <button
        className={styles.backTo}
        onClick={() => {
          navigate('/');
        }}
      >
        <ArrowLeft />
        <span>На главную страницу</span>
      </button>
  );
}
