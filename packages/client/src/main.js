import Journal from './components/Journal';
import fetchData from './api/fetchData';

import './style.module.css';

async function main() {
  const data = await fetchData('/journal');
  return Journal(data);
}

const blog = await main();
document.body.innerHTML = blog;
