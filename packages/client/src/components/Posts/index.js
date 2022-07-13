import Post from '../Post';

import styles from './styles.module.css';

export default function Posts(posts) {
  return (`
    <div class="${styles.posts}">
      ${posts.map(Post).join('')}
    </div>
  `);
}
