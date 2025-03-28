import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useActions } from '../../hooks/actions';
import { useLoginMutation } from '../../store/zolotoy/zolotoy.api';
import visible from '../../assets/login/visibility_off.svg';
import hidden from '../../assets/login/visibility.svg';
import ActionButton from '../../components/ActionButton';

export default function LoginPage() {
  const { setLoggedIn } = useActions();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitLogin = async data => {
    try {
      const res = await login(data).unwrap();
      localStorage.setItem('authToken', res.token);
      setLoggedIn(true);
      navigate('/main');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.loginPage}>
      <div className={styles.loginPage__container}>
        <form
          onSubmit={handleSubmit(onSubmitLogin)}
          className={styles.loginPage__form}
        >
          <h1 className={styles.loginPage__title}>Вход на сайт</h1>
          <div className={styles.loginPage__inputField}>
            <label className={styles.loginPage__label} htmlFor="email">
              Электронная почта
            </label>
            <input
              className={`${styles.loginPage__input} ${
                errors.email && styles.loginPage__inputError
              }`}
              type="text"
              placeholder="Введите email"
              {...register('email', {
                required: true,
                pattern: /^[A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,8}$/,
              })}
            />
            {errors.email && errors.email.type === 'pattern' && (
              <span className={styles.loginPage__errorSpan}>
                Введите email в верном формате
              </span>
            )}
            {errors.email && errors.email.type === 'required' && (
              <span className={styles.loginPage__errorSpan}>
                email не введен
              </span>
            )}
          </div>
          <div className={styles.loginPage__inputField}>
            <label className={styles.loginPage__label} htmlFor="password">
              Пароль
            </label>
            <input
              className={`${styles.loginPage__input} ${
                errors.password && styles.loginPage__inputError
              }`}
              type={showPassword ? 'text' : 'password'}
              placeholder="Введитe пароль"
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 30,
              })}
            />
            <button
              className={styles.loginPage__showPasswordButton}
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={showPassword ? visible : hidden}
                alt="кнопка показывать пароль"
              />
            </button>
            {errors.password && errors.password.type === 'minLength' && (
              <span className={styles.loginPage__errorSpan}>
                Минимальная длина пароля 6
              </span>
            )}
            {errors.password && errors.password.type === 'maxLength' && (
              <span className={styles.loginPage__errorSpan}>
                Максимальная длина пароля 30
              </span>
            )}
            {errors.password && errors.password.type === 'required' && (
              <span className={styles.loginPage__errorSpan}>
                Пароль не введен
              </span>
            )}
          </div>
          <div className={styles.loginPage__submitButton}>
            <ActionButton title="Войти" type="submit"  />
          </div>
        </form>
      </div>
    </section>
  );
}
