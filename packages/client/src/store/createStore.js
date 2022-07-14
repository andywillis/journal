export default function createStore(initialState, reducer) {

  const state = new Proxy(
    { value: initialState },
    {
      set(obj, prop, value) {
        obj[prop] = value;
      }
    }
  );

  function getState() {
    return { ...state.value };
  }

  function dispatch(action) {
    return new Promise(res => {
      const prevState = getState();
      state.value = reducer(prevState, action);
      res();
    });
  }

  return {
    getState,
    dispatch
  };

}
