import styles from './styles.module.css';

export default function Tag(tag) {
  return (`
    <div class="${styles.tag}">
      ${tag.tag}
    </div>
  `);
}
