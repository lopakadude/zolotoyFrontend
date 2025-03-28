/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import {
  phoneNumber,
  phoneNumberToCall,
  postAddress,
} from '../../utils/constants.js';
import phoneIcon from '../../assets/main/contacts/PhoneIcon.svg';

export default function ContactsSection() {
  return (
    <div className={styles.contactsSection__container}>
      <div className={styles.contactsSection__contacts}>
        <a
          className={styles.contactsSection__telNumber}
          href={`tel:${phoneNumberToCall}`}
        >
          {phoneNumber} <img src={phoneIcon} alt="иконка телефона" />
        </a>
        <p className={styles.contactsSection__schedule}>ежедневно 10-19</p>
        <p className={styles.contactsSection__address}>{postAddress}</p>
      </div>
      <div className={styles.contactsSection__map}>
        <iframe
          className={styles.contactsSection__frame}
          src="https://yandex.ru/map-widget/v1/?ll=43.436517%2C45.102063&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMTUyMjQxMDY0EnTQoNC-0YHRgdC40Y8sINCh0YLQsNCy0YDQvtC_0L7Qu9GM0YHQutC40Lkg0LrRgNCw0LksINCR0LvQsNCz0L7QtNCw0YDQvdGL0LksINCf0LXRgNCy0L7QvNCw0LnRgdC60LDRjyDRg9C70LjRhtCwLCAyNCIKDf--LUIVg2g0Qg%2C%2C&z=17.16"
        ></iframe>
      </div>
    </div>
  );
}
