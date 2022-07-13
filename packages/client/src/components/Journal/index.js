import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';

import styles from './styles.module.css';

export default function Journal(posts) {
  return (`
    <main class="${styles.blog}">
      ${Header()}
      ${Posts(posts)}
      ${Footer(`© Andy Willis ${new Date().getFullYear()}`)}
    </main>
  `);
}
