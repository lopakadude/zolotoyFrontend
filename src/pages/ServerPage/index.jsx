import styles from './styles.module.css';
import ActionButton from '../../components/ActionButton';
import HeaderTop from '../../components/HeaderTop';

export default function ServerPage() {


  return (
    <section className={styles.server}>
      <HeaderTop />
      <div className={styles.server__main}>
        <h1 className={styles.server__title}>500</h1>
        <h2 className={styles.server__subtitle}>Внутренняя ошибка сервера</h2>
        <p className={styles.server__description}>
          Перезагрузите страницу или подождите несколько минут.
        </p>
        <div
          className={styles.server__buttonToMain}
          onClick={() => window.location.reload()}
        >
          <ActionButton title="Обновить" />
        </div>
      </div>
    </section>
  );
}
