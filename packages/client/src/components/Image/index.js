import styles from './styles.module.css';

export default function Image(src, alt) {
  return (`
    <img
      class="${styles.image}"
      src="${src}"
      alt="${alt}"
    >
  `);
}
