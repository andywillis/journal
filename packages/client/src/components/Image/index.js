import styles from './styles.module.css';

export default function Image({ src, alt }) {

  // const [ , width, height ] = alt.match(/(\d+)x(\d+)/);
  // style="height: ${height}px; width: ${width}px"
  // width="${width}"
  // height="${height}"

  return (`
    <div class="${styles.imageContainer}">
      <img
        class="${styles.image}"
        src="${src}"
        alt="${alt}"
      >
    </div>
  `);

}
