import renderPost from './renderPost';

export default function renderPosts(data) {
  return data.map(post => {
    return renderPost(post);
  }).join('');
}
