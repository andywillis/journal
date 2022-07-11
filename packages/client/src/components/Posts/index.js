import Post from '../Post';

import styles from './styles.module.css';

export default function Posts(data) {
  return (`
    <div class="${styles.posts}">
      ${data.map(post => {
        return Post(post);
      }).join('')}
    </div>
  `);
}
