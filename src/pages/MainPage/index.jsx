import styles from './styles.module.css';
import ServiceSection from '../../components/ServiceSection';
import AboutSection from '../../components/AboutSection';
import GetLoanSection from '../../components/GetLoanSection';
import PriceSection from '../../components/PriceSection';
import ContactsSection from '../../components/ContactsSection';
import Header from '../../components/Header';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function MainPage() {
  const location = useLocation();

  const aboutRef = useRef();
  const getLoanRef = useRef();
  const priceRef = useRef();
  const contactsRef = useRef();
  const serviceRef = useRef();

  useEffect(() => {
    if (location.hash === '#service') {
      serviceRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (location.hash === '#about') {
      aboutRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (location.hash === '#howToGetLoan') {
      getLoanRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (location.hash === '#price') {
      priceRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (location.hash === '#contacts') {
      contactsRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);
  return (
    <div className={styles.main}>
      <Header />
      <section id="service" className={styles.main__section} ref={serviceRef}>
        <h2 className={`${styles.main__title} ${styles.main__title_service}`}>
          С нашими услугами вы получаете
        </h2>
        <ServiceSection />
      </section>
      <section
        id="about"
        className={`${styles.main__section} ${styles.main__section_about}`}
        ref={aboutRef}
      >
        <h2 className={`${styles.main__title} ${styles.main__title_about}`}>
          О нас
        </h2>
        <AboutSection />
      </section>
      <section
        id="howToGetLoan"
        className={styles.main__section}
        ref={getLoanRef}
      >
        <h2
          className={`${styles.main__title} ${styles.main__title_howToGetLoan}`}
        >
          Займ получить просто
        </h2>
        <GetLoanSection />
      </section>
      <section id="price" className={styles.main__section} ref={priceRef}>
        <h2 className={styles.main__title}>Прейскурант цен</h2>
        <PriceSection />
      </section>
      <section id="contacts" className={styles.main__section} ref={contactsRef}>
        <h2 className={styles.main__title}>Контакты</h2>
        <ContactsSection />
      </section>
    </div>
  );
}
