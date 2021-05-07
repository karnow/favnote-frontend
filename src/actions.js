export const addNote = (cardType) => ({
  type: 'ADD_RESOURCE',
  resource: { id: getId(), title: 'mietk', content: 'wiesiek', created: '15 days' },
  cardType: cardType,
});
export const removeResource = (noteId, cardType) => ({
  type: 'REMOVE_RESOURCE',
  indexToRemove: noteId,
  cardType: cardType,
});

const getId = () => Math.random().toString(36).substr(2, 9);
