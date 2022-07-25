export const initialState = {
  journal: [],
  entry: null,
  page: 0,
  tag: null
};

export default function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {

    case 'setJournal': {
      return { ...state, journal: payload };
    }

    case 'setEntry': {
      return { ...state, entry: payload };
    }

    case 'setTag': {
      return { ...state, tag: payload };
    }

    case 'setPage': {
      return { ...state, page: payload };
    }

  }

}
