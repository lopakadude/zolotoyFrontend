/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import rings from '../../assets/main/rings.svg';

export default function ServiceSection() {
  return (
    <div className={styles.serviceSection__container}>
      <p className={styles.serviceSection__title}>
        Безопасность сделки и качественное обслуживание.
      </p>
      <img
        className={styles.serviceSection__ringsImg}
        src={rings}
        alt="кольца"
      />
      <ul className={styles.serviceSection__list}>
        <li className={styles.serviceSection__listItem}>Низкая % ставка</li>
        <li className={styles.serviceSection__listItem}>Высокая цена оценки </li>
        <li className={styles.serviceSection__listItem}>
          Оперативная выдача денег{' '}
        </li>
        <li className={styles.serviceSection__listItem}>Надежность</li>
      </ul>
    </div>
  );
}
