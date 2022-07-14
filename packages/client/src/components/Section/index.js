import Blockquote from '../Blockquote';
import Image from '../Image';
import Paragraph from '../Paragraph';
import Table from '../Table';

function format(section) {
  switch (section.type) {
    case 'blockquote': return Blockquote(section.html);
    case 'image': return Image(section.src, section.alt);
    case 'table': return Table(section.html);
    default: return Paragraph(section.html);
  }
}

export default function Section(section) {
  return `${format(section)}`;
}
