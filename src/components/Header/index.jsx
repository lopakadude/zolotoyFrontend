import styles from './styles.module.css';
import ActionButton from '../ActionButton';
import image1 from '../../assets/header/image1.png';
import image2 from '../../assets/header/image2.png';
import image3 from '../../assets/header/image3.png';
import image4 from '../../assets/header/image4.png';
import image5 from '../../assets/header/image5.png';
import image6 from '../../assets/header/image6.png';
import HeaderTop from '../HeaderTop';

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderTop header />
      <h1 className={styles.header__title}>Займ под залог ювелирных изделий</h1>
      <h3 className={styles.header__subtitle}>
        Быстро. Дорого. Конфидициально.
      </h3>
      <a href="#price" className={styles.actionButtonContainer}>
        <ActionButton title="Рассчитать сумму займа" />
      </a>
      <div className={styles.header__images}>
        <img className={styles.header__img} src={image1} alt="серьги" />
        <img className={styles.header__img} src={image2} alt="кольцо" />
        <img className={styles.header__img} src={image3} alt="цепочка" />
        <img
          className={`${styles.header__img} ${styles.header__img_noMobile}`}
          src={image4}
          alt="кулон"
        />
        <img
          className={`${styles.header__img} ${styles.header__img_noMobile}`}
          src={image5}
          alt="тонкое кольцо"
        />
        <img
          className={`${styles.header__img} ${styles.header__img_noMobile}`}
          src={image6}
          alt="цепь"
        />
      </div>
      <p className={styles.header__postScript}>
        Мы стараемся оправдать доверие клиентов
      </p>
    </header>
  );
}
