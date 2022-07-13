import styles from './styles.module.css';

export default function Image(src, alt) {
  return (`
    <div class="${styles.imageContainer}">
      <img
        class="${styles.image}"
        src="${src}"
        alt="${alt}"
      >
    </div>
  `);
}
