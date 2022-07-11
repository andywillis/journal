import renderPosts from './components/Posts';
import fetchData from './helpers/fetchData';

import './style.module.css';

async function renderBlog() {
  const data = await fetchData('/blog');
  return renderPosts(data);
}

const html = await renderBlog();
document.body.innerHTML = html;
