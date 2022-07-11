import Post from '../Post';

export default function Posts(data) {
  return data.map(post => {
    return Post(post);
  }).join('');
}
