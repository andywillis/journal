import Header from '../Header';
import Entries from '../Entries';
import Footer from '../Footer';

import styles from './styles.module.css';

export default function Journal(journal) {
  return (`
    <main class="${styles.journal}">
      ${Header()}
      ${Entries(journal.entries)}
      ${Footer(`© Andy Willis ${new Date().getFullYear()}`)}
    </main>
  `);
}
