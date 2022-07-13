import styles from './styles.module.css';

export default function Tag(tag) {
  return (`
    <li class="${styles.tag}">
      ${tag.tag}
    </li>
  `);
}
