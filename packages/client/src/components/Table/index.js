import styles from './styles.module.css';

export default function Table(data) {
  return (`
    <table class="${styles.table}">
      ${data}
    </table>
  `);
}
