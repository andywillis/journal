import Header from '../Header';
import Entries from '../Entries';
import Footer from '../Footer';
// import store from '../../store/store';

import styles from './styles.module.css';

// console.log(store.getState());

export default function Journal(journal) {
  return (`
    <div class="${styles.journal}">
      ${Header()}
      ${Entries(journal.entries)}
      ${Footer(`© Andy Willis ${new Date().getFullYear()}`)}
    </div>
  `);
}
