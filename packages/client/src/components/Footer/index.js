import styles from './styles.module.css';

export default function Footer(data) {
  return (`
    <footer class="${styles.footer}">
      <h2 class="${styles.heading}">${data}</h2>
    </footer>
  `);
}
