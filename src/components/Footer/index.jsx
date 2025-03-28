import styles from './styles.module.css';
import headerLogo from '../../assets/header/logo.jpg';
import NavigateButton from '../NavigateButton';
import {
  phoneNumber,
  phoneNumberToCall,
  address,
  email,
  inn,
  ogrn,
  shortName,
} from '../../utils/constants.js';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <img
          className={styles.footer__logo}
          src={headerLogo}
          alt="лого ломбарда"
        />
        <div className={styles.footer__navContainer}>
          <div className={styles.header__navContainer}>
            <nav className={`${styles.navBar} ${styles.navBar_footer}`}>
              <button className={styles.navBar__navButton}>
                <a
                  className={`${styles.navBar__navItem} ${styles.navBar__navItem_white}
                    }`}
                  href="main#service"
                >
                  Услуги
                </a>
              </button>
              <button className={styles.navBar__navButton}>
                <a
                  className={`${styles.navBar__navItem} 
                    ${styles.navBar__navItem_white}
                  }`}
                  href="main#about"
                >
                  О нас
                </a>
              </button>
              <button className={styles.navBar__navButton}>
                <a
                  className={`${styles.navBar__navItem} 
                    ${styles.navBar__navItem_white}
                  }`}
                  href="main#howToGetLoan"
                >
                  Этапы
                </a>
              </button>
              <button className={styles.navBar__navButton}>
                <a
                  className={`${styles.navBar__navItem} 
                    ${styles.navBar__navItem_white}
                  }`}
                  href="main#price"
                >
                  Прейскурант
                </a>
              </button>
              <button className={styles.navBar__navButton}>
                <a
                  className={`${styles.navBar__navItem} 
                    ${styles.navBar__navItem_white}
                  }`}
                  href="main#contacts"
                >
                  Контакты
                </a>
              </button>
            </nav>
          </div>
        </div>
        <div className={styles.footer__docContainer}>
          <NavigateButton title="Документы" link="/documents" />
          <NavigateButton title="Реквизиты" link="/details" />
        </div>
        <div className={styles.footer__nameOfCompanyContainer}>
          <p className={styles.footer__nameLegend}>Ломбард</p>
          <p className={styles.footer__nameOfCompany}>«Золотой»</p>
        </div>
        <a
          className={styles.footer__telNumber}
          href={`tel:${phoneNumberToCall}`}
        >
          {phoneNumber}
        </a>
        <button
          className={styles.footer__button}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        ></button>
      </div>
      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottomContainer}>
          <a className={styles.footer__confidentialityPolicy} href="">
            Политика конфиденциальности
          </a>
          <p className={styles.footer__address}>{address}</p>
          <p className={styles.footer__copyright}>
            &copy; LombardZolotoy {new Date().getFullYear()}
          </p>
          <a href={`mailto:${email}`} className={styles.footer__email}>
            {email}
          </a>
          <p className={styles.footer__case}>
            Услуги кредитования под залог ювелирных изделий предоставляет{' '}
            {shortName} ИНН-{inn}, ОГРН-{ogrn}.
          </p>
        </div>
      </div>
    </footer>
  );
}
