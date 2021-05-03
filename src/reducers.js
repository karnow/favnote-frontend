const initialState = {
  notes: [
    {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Como es An Gular?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 3,
      title: 'Du bist Reactish',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
    },
    {
      id: 4,
      title: 'Reactuj się kto moze!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
    },
  ],
  twitters: [],
  articles: [],
};

export function noteReducer(state = initialState, action = {}) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case 'NOTE_SET': {
      return state;
    }

    default:
      return state;
  }
}

export const getAllNotes = (state) => state.notes;
export const getAllTwitters = (state) => state.twitters;
export const getAllArticles = (state) => state.articles;
export const getNoteByID = (state, noteId) => state.notes.find((note) => note.id === noteId);
