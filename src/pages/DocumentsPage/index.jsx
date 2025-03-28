import styles from './styles.module.css';
import BackTo from '../../components/Backto';
import ERGUL from '../../assets/documents/ERGUL.pdf';

export default function DocumentsPage() {
  return (
    <section className={styles.documentsPage}>
      <h1 className={styles.documentsPage__title}>Документы</h1>
      <BackTo />
      <div className={styles.documentsPage__container}>
        <p
          className={styles.documentsPage__link}
          // href={ERGUL}
          // target="_blank"
          // download
          // disabled
        >
          Пробирная палата
        </p>
        <a
          className={styles.documentsPage__link}
          href={ERGUL}
          target="_blank"
          download
        >
          Лист записи из ЕГРЮЛ от 06.02.2025
        </a>
        <p
          className={styles.documentsPage__link}
          // href={ERGUL}
          // target="_blank"
          // download
        >
          Выписка из реестра ломбардов
        </p>
        <p
          className={styles.documentsPage__link}
          // href={ERGUL}
          // target="_blank"
          // download
        >
          Свидетельство «ЛИГА ЛОМБАРДОВ»
        </p>
      </div>
    </section>
  );
}
