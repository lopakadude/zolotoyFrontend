import styles from './styles.module.css';
import { phoneNumber, phoneNumberToCall } from '../../utils/constants.js';
import headerLogo from '../../assets/header/logo.jpg';
import MenuButton from '../MenuButton';
import Modal from '../Modal';
import MenuMobile from '../MenuMobile';
import phoneIcon from '../../assets/header/phone-line.svg';
import { useLocation, useNavigate } from 'react-router-dom';
export default function HeaderTop() {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <div className={styles.header__top}>
      <img
        className={styles.header__logo}
        src={headerLogo}
        alt="лого ломбарда"
        onClick={() =>
          location.pathname != '/main' ? navigate('/main') : null
        }
      />
      <div className={styles.header__navContainer}>
        <nav
          className={`${styles.navBar} ${styles.navBar_header}
      }`}
        >
          <button className={styles.navBar__navButton}>
            <a className={styles.navBar__navItem} href="main#service">
              Услуги
            </a>
          </button>
          <button className={styles.navBar__navButton}>
            <a className={styles.navBar__navItem} href="main#about">
              О нас
            </a>
          </button>
          <button className={styles.navBar__navButton}>
            <a className={styles.navBar__navItem} href="main#howToGetLoan">
              Этапы
            </a>
          </button>
          <button className={styles.navBar__navButton}>
            <a className={styles.navBar__navItem} href="main#price">
              Прейскурант
            </a>
          </button>
          <button className={styles.navBar__navButton}>
            <a className={styles.navBar__navItem} href="main#contacts">
              Контакты
            </a>
          </button>
        </nav>
      </div>
      <div className={styles.header__telContainer}>
        <p className={styles.header__telLegend}>телефон</p>
        <img
          className={styles.header__telIcon}
          src={phoneIcon}
          alt="иконка телефона"
        />
        <a
          className={styles.header__telNumber}
          href={`tel:${phoneNumberToCall}`}
        >
          {phoneNumber}
        </a>
      </div>
      <MenuButton />
      <Modal content={<MenuMobile />} />
    </div>
  );
}
