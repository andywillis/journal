export const initialState = {
  journal: []
};

export default function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {

    case 'storeJournal': {
      return {
        ...state,
        journal: payload
      };
    }

  }

}
