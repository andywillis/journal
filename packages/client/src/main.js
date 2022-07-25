import Journal from './components/Journal';
import fetchData from './api/fetchData';
import store from './store/store';

import './style.module.css';

async function main() {
  const data = await fetchData('/journal');
  await store.dispatch({ type: 'setJournal', payload: data });
  return Journal(data);
}

const journal = await main();
document.body.innerHTML = journal;
