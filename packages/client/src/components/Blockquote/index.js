import styles from './styles.module.css';

export default function Blockquote(blockquote) {
  return (`
    <p class=${styles.blockquote}>
      ${blockquote}
    </p>
  `);
}
