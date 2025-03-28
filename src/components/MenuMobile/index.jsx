import styles from './styles.module.css';
import { address, email } from '../../utils/constants';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

export default function MenuMobile() {
    const { closeModal } = useActions();
  const isMenuOpen = useAppSelector(state => state.modal.isModalOpen);
  return (
    <div className={`${styles.menu} ${isMenuOpen ? styles.menu_active : ''}`}>
      <nav className={styles.navBar}>
        <a className={styles.navBar__navItem} href="main#service" onClick={()=>{closeModal()}}>
          Услуги
        </a>
        <a className={styles.navBar__navItem} href="main#about" onClick={()=>{closeModal()}}>
          О нас
        </a>
        <a className={styles.navBar__navItem} href="main#howToGetLoan" onClick={()=>{closeModal()}}>
          Этапы
        </a>
        <a className={styles.navBar__navItem} href="mainmain#price" onClick={()=>{closeModal()}}>
          Прейскурант
        </a>
        <a className={styles.navBar__navItem} href="main#contacts" onClick={()=>{closeModal()}}>
          Контакты
        </a>
      </nav>
      <p className={styles.menu__address}>{address}</p>
      <p className={styles.menu__email}>{email}</p>
    </div>
  );
}
