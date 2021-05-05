export const addNote = (note, typeNote) => ({ type: 'ADD_NOTE', note, typeNote });
export const removeResource = (noteId, cardType) => ({
  type: 'REMOVE_RESOURCE',
  indexToRemove: noteId,
  cardType: cardType,
});
