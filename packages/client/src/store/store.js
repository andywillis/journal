import createStore from './createStore';
import reducer, { initialState } from './reducer';

const store = createStore(initialState, reducer);
export default store;
