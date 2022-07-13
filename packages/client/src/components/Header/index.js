import Icon from '../Icon';
import IconStrip from '../IconStrip';

import iconConfig from '../../config/icons';

import styles from './styles.module.css';

export default function Header() {
  return (`
    <header class="${styles.header}">
      <nav class="${styles.nav}">
        ${Icon({ name: 'home', active: true })}
        ${IconStrip(iconConfig)}
        </nav>
    </header>
  `);
}
