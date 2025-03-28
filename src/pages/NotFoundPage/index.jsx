import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import ActionButton from '../../components/ActionButton';
import HeaderTop from '../../components/HeaderTop';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className={styles.notFound}>
      <HeaderTop />
      <div className={styles.notFound__main}>
        <h1 className={styles.notFound__title}>404</h1>
        <h2 className={styles.notFound__subtitle}>
          Такой страницы не существует
        </h2>
        <p className={styles.notFound__description}>
          Всю информацию по ломбарду «Золотой» вы можете посмотреть на главной
          странице.
        </p>
        <div
          className={styles.notFound__buttonToMain}
          onClick={() => navigate('/', { replace: true })}
        >
          <ActionButton title="На главную" />
        </div>
      </div>
    </section>
  );
}
