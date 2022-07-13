import renderBlog from './components/Blog';
import fetchData from './helpers/fetchData';

import './style.module.css';

async function main() {
  const data = await fetchData('/journal');
  return renderBlog(data);
}

const blog = await main();
document.body.innerHTML = blog;
