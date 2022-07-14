import styles from './styles.module.css';

export default function Paragraph(html) {
  return (`
    <p class="${styles.paragraph}">
      ${html}
    </p>
  `);
}
