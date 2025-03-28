/* eslint-disable react/prop-types */
import styles from './styles.module.css';

export default function ActionButton({
  title,
  size,
  secondary,
  type,
  disabled,
}) {
  return (
      <button
        className={`${styles.actionButton} ${
          size === 's' ? `${styles.actionButton_size_s}` : ''
        } ${secondary ? `${styles.actionButton_secondary}` : ''} ${
          disabled ? `${styles.actionButton_disabled}` : ''
        }`}
        type={type ? type : 'button'}
        disabled={disabled}
      >
        {title}
      </button>
  );
}
