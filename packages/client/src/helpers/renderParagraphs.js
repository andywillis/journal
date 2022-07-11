import renderParagraph from './renderParagraph';

export default function renderParagraphs(data) {
  return data.map(para => {
    return renderParagraph(para);
  }).join('');
}
