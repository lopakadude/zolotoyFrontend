/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import illustration from '../../assets/main/illustration.svg';

export default function AboutSection() {
  return (
    <div className={styles.aboutSection__container}>
      <img src={illustration} alt="сделка" className={styles.aboutSection__img}/>
      <div className={styles.aboutSection__main}>
        <h3 className={styles.aboutSection__subtitle}>Ломбард «Золотой»</h3>
        <ul className={styles.aboutSection__list}>
          <li className={styles.aboutSection__listItem}>Надежность</li>
          <p className={styles.aboutSection__listItemDescription}>
            Бесплатная точная оценка ваших ювелирных изделий. Максимальная сумма
            выдачи, низкие процентные ставки.{' '}
          </p>
          <li className={styles.aboutSection__listItem}>Современный сервис </li>
          <p className={styles.aboutSection__listItemDescription}>
            Высокий уровень обслуживания, комфорт пребывания и чистота.
          </p>
          <li className={styles.aboutSection__listItem}>
            Высокий уровень безопасности залогов{' '}
          </li>
          <p className={styles.aboutSection__listItemDescription}>
            Ломбард находятся под круглосуточной охраной.
          </p>
        </ul>
      </div>
      <div className={styles.aboutSection__descriptionContainer}>
        <div >
          <p className={styles.aboutSection__descriptionHeader}>постоянные</p>
          <p className={styles.aboutSection__description}>клиенты</p>
        </div>
        <div>
          <p className={styles.aboutSection__descriptionHeader}>100%</p>
          <p className={styles.aboutSection__description}>довольных</p>
        </div>
      </div>
    </div>
  );
}
