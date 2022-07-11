import Paragraph from '../Paragraph';

export default function renderParagraphs(data) {
  return data.map(para => {
    return Paragraph(para);
  }).join('');
}
