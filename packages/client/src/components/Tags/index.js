import Tag from '../Tag';

import styles from './styles.module.css';

export default function Tags(data) {
  return (`
    <ul class=${styles.tags}>
      ${data.map(Tag).join('')}
    </ul> 
  `);
}
