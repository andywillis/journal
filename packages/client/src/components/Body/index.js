import Section from '../Section';

import styles from './styles.module.css';

export default function Body(sections) {
  return (`
    <div class="${styles.body}">
      ${sections.map(Section).join('')}
    </div>
  `);
}
