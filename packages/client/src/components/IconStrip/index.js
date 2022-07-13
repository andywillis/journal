import Icon from '../Icon';

import styles from './styles.module.css';

export default function IconStrip(icons) {
  return (`
    <div class="${styles.iconStrip}">
      ${icons.map(Icon).join('')}
    </div>
  `);
}
