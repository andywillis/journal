import Paragraph from '../Paragraph';

export default function Paragraphs(data) {
  return data.map(para => {
    return Paragraph(para);
  }).join('');
}
