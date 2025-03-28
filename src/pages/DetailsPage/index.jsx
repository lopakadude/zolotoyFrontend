import styles from './styles.module.css';
import { nameOfCompany,ogrn,inn,kpp,okpo,oktmo,okogu,okato,bank,bik,rs,ks,legalAddress, postAddress, ceo,phoneNumber, email,okved  } from '../../utils/constants';
import BackTo from '../../components/Backto';

export default function DetailsPage() {
  return (
    <section className={styles.detailsPage}>
      <h1 className={styles.detailsPage__title}>Реквизиты</h1>
      <BackTo />
      <div className={styles.detailsPage__container}>
        <ul className={styles.detailsPage__list}>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>
              Полное наименование
            </p>
            <p className={styles.detailsPage__listItemValue}>{nameOfCompany}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>ОГРН</p>
            <p className={styles.detailsPage__listItemValue}>{ogrn}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>ИНН/КПП</p>
            <p className={styles.detailsPage__listItemValue}>{inn}/{kpp}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>ОКТМО</p>
            <p className={styles.detailsPage__listItemValue}>{oktmo}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>ОКПО</p>
            <p className={styles.detailsPage__listItemValue}>{okpo}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>ОКОГУ</p>
            <p className={styles.detailsPage__listItemValue}>{okogu}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>ОКАТО</p>
            <p className={styles.detailsPage__listItemValue}>{okato}</p>
          </li>
        </ul>
        <ul className={styles.detailsPage__list}>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>
              Наименование банка
            </p>
            <p className={styles.detailsPage__listItemValue}>{bank}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>БИК</p>
            <p className={styles.detailsPage__listItemValue}>{bik}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>
              Расчетный счет
            </p>
            <p className={styles.detailsPage__listItemValue}>{rs}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>
              Корреспондентский счет
            </p>
            <p className={styles.detailsPage__listItemValue}>{ks}</p>
          </li>
        </ul>
        <ul className={styles.detailsPage__list}>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>
              Юридический адрес
            </p>
            <p className={styles.detailsPage__listItemValue}>{legalAddress}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>
              Почтовый адрес
            </p>
            <p className={styles.detailsPage__listItemValue}>{postAddress}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>Директор</p>
            <p className={styles.detailsPage__listItemValue}>{ceo}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>
              Контактные данные
            </p>
            <p className={styles.detailsPage__listItemValue}>email: {email} <br/> тел.{phoneNumber}</p>
          </li>
          <li className={styles.detailsPage__listItem}>
            <p className={styles.detailsPage__listItemDescription}>
              ОКВЭД(основной)
            </p>
            <p className={styles.detailsPage__listItemValue}>{okved}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
