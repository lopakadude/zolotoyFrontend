/* eslint-disable react/prop-types */
import styles from './styles.module.css';

export default function GetLoanSection() {
  return (
    <ol className={styles.getLoanSection__list}>
      <li className={styles.getLoanSection__listItem}>
        <h4 className={styles.getLoanSection__listItemTitle}>
          1. Приходите в ломбард
        </h4>
        <p className={styles.getLoanSection__listItemDescription}>
          Возьмите ваши ювелирные украшения или любые изделия из драгоценных
          металлов и зайдите в офис компании.
        </p>
      </li>
      <li className={styles.getLoanSection__listItem}>
        <h4 className={styles.getLoanSection__listItemTitle}>
          2. Оцените изделия
        </h4>
        <p className={styles.getLoanSection__listItemDescription}>
          Наш эксперт проведет профессиональную оценку любого изделия и
          предложит вам лучшую сумму по выгодным условиям займа.
        </p>
      </li>
      <li className={styles.getLoanSection__listItem}>
        <h4 className={styles.getLoanSection__listItemTitle}>
          {' '}
          3. Получите займ
        </h4>
        <p className={styles.getLoanSection__listItemDescription}>
          Получаете займ сразу после оценки. А ваши изделия хранятся в сейфе и
          возвращаются вам в день погашения займа.
        </p>
      </li>
      <li className={styles.getLoanSection__listItem}>
        <h4 className={styles.getLoanSection__listItemTitle}>
          4. Оформите договор
        </h4>
        <p className={styles.getLoanSection__listItemDescription}>
          Получаете на руки договор займа.
        </p>
      </li>
    </ol>
  );
}
