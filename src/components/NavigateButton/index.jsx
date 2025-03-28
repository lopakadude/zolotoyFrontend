/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';


export default function NavigateButton({ title, link }) {
  const navigate = useNavigate();
  return (
    <button
      className={`${styles.navigateButton} `}
      type="button"
      onClick={() => {
        navigate(link);
      }}
    >
      {title}
    </button>
  );
}
