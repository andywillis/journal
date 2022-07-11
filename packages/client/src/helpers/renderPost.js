import renderDate from './renderDate';
import renderParagraphs from './renderParagraphs';
import renderTitle from './renderTitle';

export default function renderPost(data) {
  const { date, title, paragraphs } = data;
  return (`
    <div class="post">
      ${renderDate(date)}
      ${renderTitle(title)}
      ${renderParagraphs(paragraphs)}
    </div>
  `);
}
