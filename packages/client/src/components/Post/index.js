import Date from '../Date';
import Paragraphs from '../Paragraphs';
import Title from '../Title';

export default function Post(data) {
  const { date, title, paragraphs } = data;
  return (`
    <div class="post">
      ${Date(date)}
      ${Title(title)}
      ${Paragraphs(paragraphs)}
    </div>
  `);
}
