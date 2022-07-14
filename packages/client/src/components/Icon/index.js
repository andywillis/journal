import classnames from 'classnames';
import styles from './styles.module.css';

export default function Icon(icon) {

  const classes = classnames(
    styles.icon,
    icon.active && styles.active
  );

  return (`
    <button
      class="${classes}"
      data-type="${icon.name}"
      type="button"
    ></button>
  `);

}
