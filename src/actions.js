export const addResource = (data) => ({
  type: 'ADD_RESOURCE',
  resource: data,
});
export const removeResource = (noteId, cardType) => ({
  type: 'REMOVE_RESOURCE',
  indexToRemove: noteId,
  cardType: cardType,
});

export const authorise = (_id) => ({
  type: 'AUTH_SUCCESS',
  userId: _id,
});

export const addAllNotes = (data) => ({
  type: 'GET_ALL_NOTES',
  resource: data,
});
export const addAllTwitters = (data) => ({
  type: 'GET_ALL_TWITTERS',
  resource: data,
});
export const addAllArticles = (data) => ({
  type: 'GET_ALL_ARTICLES',
  resource: data,
});

export const addCurrentNote = (data) => ({
  type: 'SET_CURRENT_NOTE',
  resource: data,
});
// const getId = () => Math.random().toString(36).substr(2, 9);
