import Tag from '../Tag';

import styles from './styles.module.css';

export default function Tags(data) {
  return (`
    <div class=${styles.tags}>
      ${data.map(Tag).join('')}
    </div> 
  `);
}
