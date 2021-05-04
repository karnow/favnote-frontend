export const addNote = (note, typeNote) => ({ type: 'ADD_NOTE', note, typeNote });
export const removeResource = (noteId, removeType) => ({ type: removeType, indexToRemove: noteId });
