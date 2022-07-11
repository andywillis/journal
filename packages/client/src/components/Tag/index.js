import styles from './styles.module.css';

export default function Tag(data) {
  return `<div class=${styles.tag}>${data}</div>`;
}
