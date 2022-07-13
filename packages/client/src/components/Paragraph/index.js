import Image from '../Image';

import styles from './styles.module.css';

function format(para, type) {
  switch (type) {
    case 'image': return Image(para.src, para.alt);
    default: return para.html;
  }
}

export default function Paragraph(para) {
  const { type } = para;
  return (`
    <p class=${styles.paragraph}>
      ${format(para, type)}
    </p>
  `);
}
