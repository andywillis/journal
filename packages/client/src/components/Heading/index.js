import styles from './styles.module.css';

export default function Heading({ level, text }) {
  return (`
    <div class="${styles[level]}">
      ${text}
    </div>
  `);
}
