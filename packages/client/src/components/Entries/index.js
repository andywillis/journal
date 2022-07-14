import Entry from '../Entry';

import styles from './styles.module.css';

export default function Entries(entries) {
  return (`
    <main class="${styles.entries}">
      ${entries.map(Entry).join('')}
    </main>
  `);
}
