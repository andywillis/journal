import styles from './styles.module.css';

export default function Header(data) {
  return (`
    <header class="${styles.header}">
      <h1 class="${styles.heading}">${data}</h1>
    </header>
  `);
}
