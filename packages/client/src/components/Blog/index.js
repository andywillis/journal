import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';

import styles from './styles.module.css';

export default function Blog(data) {
  return (`
    <main class="${styles.blog}">
      ${Header('Vanilla JS Blog')}
      ${Posts(data)}
      ${Footer(`© Andy Willis ${new Date().getFullYear()}`)}
    </main>
  `);
}
