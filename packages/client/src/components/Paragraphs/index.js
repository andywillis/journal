import Paragraph from '../Paragraph';

export default function Paragraphs(paras) {
  return (`
    <div>
      ${paras.map(Paragraph).join('')}
    </div>
  `);
}
