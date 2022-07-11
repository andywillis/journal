import styles from './styles.module.css';

export default function Paragraph(data) {
  return `<p class=${styles.paragraph}>${data.text}</p>`;
}
