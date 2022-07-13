import Paragraph from '../Paragraph';

export default function Paragraphs(paras) {
  return paras.map(Paragraph).join('');
}
