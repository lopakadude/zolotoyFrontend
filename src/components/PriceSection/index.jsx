/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import ActionButton from '../ActionButton';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../hooks/redux';
import { useLazyGetPricesQuery, usePatchPricesDataMutation } from '../../store/zolotoy/zolotoy.api';

export default function PriceSection() {
  const [isFormActive, setIsFormActive] = useState(false);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [triggerPrices, { data: prices }] = useLazyGetPricesQuery();
  const [patchPricesData] = usePatchPricesDataMutation();
  const width = window.innerWidth;
  const pricesData = prices? prices[0] : {};
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (prices) {patchPricesData({
      _id: pricesData._id,
      category1: data.category1,
      category2: data.category2,
      category3: data.category3,
      category4: data.category4,
      category5: data.category5,

      monthlyRateCategory1: data.monthlyRateCategory1,
      monthlyRateCategory2: data.monthlyRateCategory2,
      monthlyRateCategory3: data.monthlyRateCategory3,
      monthlyRateCategory4: data.monthlyRateCategory4,
      monthlyRateCategory5: data.monthlyRateCategory5,

      dailyRateCategory1: data.dailyRateCategory1,
      dailyRateCategory2: data.dailyRateCategory2,
      dailyRateCategory3: data.dailyRateCategory3,
      dailyRateCategory4: data.dailyRateCategory4,
      dailyRateCategory5: data.dailyRateCategory5,

      goldThreeSevenFive: data.goldThreeSevenFive,
      goldFiveHundred: data.goldFiveHundred,
      goldFiveEightFive: data.goldFiveEightFive,
      goldSevenHundred: data.goldSevenHundred,
      goldCrown: data.goldCrown,
      goldNineHundred: data.goldNineHundred,

      silverEightSevenFive: data.silverEightSevenFive,
      silverNineTwoFive: data.silverNineTwoFive,
    });}

  };

  useEffect(() => {
    triggerPrices();
  }, [prices]);

  const variableInput = (value, nameInput) => {
    return isFormActive ? (
      <input
        className={`${styles.priceSection__cell} ${styles.priceSection__input}`}
        defaultValue={value}
        {...register(nameInput)}
      />
    ) : (
      <p className={styles.priceSection__cell}>{value}</p>
    );
  };

  return (
    <div className={styles.priceSection__container}>
      {isLoggedIn && (
        <button
          onClick={() => setIsFormActive(!isFormActive)}
          className={`${styles.priceSection__editButton} ${
            isFormActive ? styles.priceSection__editButton_cancel : ''
          }`}
        ></button>
      )}
      {prices && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.priceSection__form}
        >
          <h3 className={styles.priceSection__subtitle}>
            Программы кредитования
          </h3>
          <div
            className={`${styles.priceSection__section} ${styles.priceSection__section_prices}`}
          >
            <div
              className={`${styles.priceSection__column} ${styles.priceSection__column_mobileBig}`}
            >
              <p className={styles.priceSection__columnName}>Сумма, руб.</p>
              {variableInput(pricesData.category1, 'category1')}
              {variableInput(pricesData.category2, 'category2')}
              {variableInput(pricesData.category3, 'category3')}
              {variableInput(pricesData.category4, 'category4')}
              {variableInput(pricesData.category5, 'category5')}
            </div>
            <div
              className={`${styles.priceSection__column} ${styles.priceSection__column_mobileRate}`}
            >
              <p
                className={`${styles.priceSection__columnName} ${styles.priceSection__columnName_mobileRate}`}
              >
                {width > 768
                  ? 'Процентная ставка в месяц, %'
                  : 'Cтавка в месяц, %'}
              </p>
              {variableInput(
                pricesData.monthlyRateCategory1,
                'monthlyRateCategory1',
              )}
              {variableInput(
                pricesData.monthlyRateCategory2,
                'monthlyRateCategory2',
              )}
              {variableInput(
                pricesData.monthlyRateCategory3,
                'monthlyRateCategory3',
              )}
              {variableInput(
                pricesData.monthlyRateCategory4,
                'monthlyRateCategory4',
              )}
              {variableInput(
                pricesData.monthlyRateCategory5,
                'monthlyRateCategory5',
              )}
            </div>
            <div
              className={`${styles.priceSection__column} ${styles.priceSection__column_mobileRate}`}
            >
              <p
                className={`${styles.priceSection__columnName} ${styles.priceSection__columnName_mobileRate}`}
              >
                {width > 768
                  ? 'Процентная ставка в день, %'
                  : 'Cтавка в день, %'}
              </p>
              {variableInput(
                pricesData.dailyRateCategory1,
                'dailyRateCategory1',
              )}
              {variableInput(
                pricesData.dailyRateCategory2,
                'dailyRateCategory2',
              )}
              {variableInput(
                pricesData.dailyRateCategory3,
                'dailyRateCategory3',
              )}
              {variableInput(
                pricesData.dailyRateCategory4,
                'dailyRateCategory4',
              )}
              {variableInput(
                pricesData.dailyRateCategory5,
                'dailyRateCategory5',
              )}
            </div>
          </div>
          <h3 className={styles.priceSection__subtitle}>Цены</h3>
          <h4 className={styles.priceSection__h4}>Золото</h4>
          <div className={styles.priceSection__section}>
            <div
              className={`${styles.priceSection__column} ${styles.priceSection__standard} `}
            >
              <p className={styles.priceSection__columnName}>Проба</p>
              <p
                className={`${styles.priceSection__cell} ${styles.priceSection__cellAndName}`}
              >
                Цена за 1 грамм, руб.
              </p>
            </div>
            <div className={styles.priceSection__goldColumn}>
              <p className={styles.priceSection__columnName}>375</p>
              {variableInput(
                pricesData.goldThreeSevenFive,
                'goldThreeSevenFive',
              )}
            </div>
            <div className={styles.priceSection__goldColumn}>
              <p className={styles.priceSection__columnName}>500</p>
              {variableInput(pricesData.goldFiveHundred, 'goldFiveHundred')}
            </div>
            <div className={styles.priceSection__goldColumn}>
              <p className={styles.priceSection__columnName}>583/585</p>
              {variableInput(pricesData.goldFiveEightFive, 'goldFiveEightFive')}
            </div>
            <div className={styles.priceSection__goldColumn}>
              <p className={styles.priceSection__columnName}>750</p>
              {variableInput(pricesData.goldSevenHundred, 'goldSevenHundred')}
            </div>
            <div className={styles.priceSection__goldColumn}>
              <p className={styles.priceSection__columnName}>коронка</p>
              {variableInput(pricesData.goldCrown, 'goldCrown')}
            </div>
            <div className={styles.priceSection__goldColumn}>
              <p className={styles.priceSection__columnName}>900</p>
              {variableInput(pricesData.goldNineHundred, 'goldNineHundred')}
            </div>
          </div>
          <h4 className={styles.priceSection__h4}>Серебро</h4>
          <div className={styles.priceSection__section}>
            <div
              className={`${styles.priceSection__column} ${styles.priceSection__standard}`}
            >
              <p className={styles.priceSection__columnName}>Проба</p>
              <p
                className={`${styles.priceSection__cell} ${styles.priceSection__cellAndName}`}
              >
                Цена за 1 грамм, руб.
              </p>
            </div>
            <div className={styles.priceSection__column}>
              <p className={styles.priceSection__columnName}>875</p>
              {variableInput(
                pricesData.silverEightSevenFive,
                'silverEightSevenFive',
              )}
            </div>
            <div className={styles.priceSection__column}>
              <p className={styles.priceSection__columnName}>925</p>
              {variableInput(pricesData.silverNineTwoFive, 'silverNineTwoFive')}
            </div>
          </div>
          {isFormActive && (
            <div className={styles.priceSection__submitButton}>
              <ActionButton title="Изменить данные" type="submit" />
            </div>
          )}
        </form>
      )}
    </div>
  );
}
