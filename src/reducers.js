const initialState = {
  notes: [],
  twitters: [],
  articles: [],
  userID: null,
};

export function noteReducer(state = initialState, action = {}) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case 'ADD_RESOURCE': {
      const { resource } = action;
      console.log(resource);
      if (resource.type === 'notes') {
        const { resource } = action;
        const notes = [...state.notes, resource];
        return { ...state, notes };
      }
      if (resource.type === 'twitters') {
        const { resource } = action;
        const twitters = [...state.twitters, resource];
        return { ...state, twitters };
      }
      if (resource.type === 'articles') {
        const { resource } = action;
        const articles = [...state.twitters, resource];
        return { ...state, articles };
      }
    }
    case 'GET_ALL_NOTES': {
      const { resource } = action;

      const notes = resource;
      return { ...state, notes };
    }
    case 'GET_ALL_TWITTERS': {
      const { resource } = action;

      const twitters = resource;
      return { ...state, twitters };
    }
    case 'GET_ALL_ARTICLES': {
      const { resource } = action;

      const articles = resource;
      return { ...state, articles };
    }
    case 'REMOVE_RESOURCE': {
      const { cardType } = action;

      if (cardType === 'note') {
        const { indexToRemove } = action;
        const notes = state.notes.filter((note) => note._id !== indexToRemove);
        return { ...state, notes };
      }
      if (cardType === 'twitter') {
        const { indexToRemove } = action;
        const twitters = state.twitters.filter((twitter) => twitter._id !== indexToRemove);
        return { ...state, twitters };
      }
      if (cardType === 'article') {
        const { indexToRemove } = action;
        const articles = state.articles.filter((article) => article._id !== indexToRemove);
        return { ...state, articles };
      }
    }
    case 'AUTH_SUCCESS': {
      const { userId } = action;
      console.log(userId);
      return {
        ...state,
        userID: userId,
      };
    }
    default:
      return state;
  }
}

//selectors
export const getUserId = (state) => state.userID;
export const getAllNotes = (state) => state.notes;
export const getAllTwitters = (state) => state.twitters;
export const getAllArticles = (state) => state.articles;
export const getNoteByID = (state, noteId) => state.notes.find((note) => note.id === noteId);
