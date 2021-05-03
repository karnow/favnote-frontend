const initialState = {
  notes: [],
  twitters: [],
  articles: [],
};

export function noteReducer(state = initialState, action = {}) {
  if (typeof state === 'undefined') {
    return initialState;
  }
}
