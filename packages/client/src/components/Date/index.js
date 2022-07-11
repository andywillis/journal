import styles from './styles.module.css';

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
// new Date().toLocaleString('en-GB', options)

export default function Date(data) {
  return `<p class=${styles.date}>${data}</p>`;
}
