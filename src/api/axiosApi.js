// import axios from './instance';
import axios from 'axios';

const AxiosApiNote = {
  login: async function (username, password) {
    const respons = await axios.post('http://localhost:3001/api/user/login', {
      username,
      password,
    });
    const result = respons.data;
    console.log(result);
    return result;
  },
  register: async function (username, password) {
    const respons = await axios.post('http://localhost:3001/api/user/register', {
      username,
      password,
    });
    console.log(respons);
    return respons;
  },

  getAllNotesByType: async function (type, userId) {
    const respons = await axios.get(
      `http://localhost:3001/api/notes/type?type=${type}&userId=${userId}`
    );
    console.log(respons);
    const result = respons.data;
    return result;
  },

  deleteNote: async function (id, userId) {
    const respons = await axios.delete(`http://localhost:3001/api/note/${id}?userId=${userId}`);
    return respons;
  },

  addNote: async function (note) {
    console.log(note);
    const res = await axios.post('http://localhost:3001/api/note', note);
    return res.data;
  },

  //   editNote: async function (note) {
  //     const respons = await axios.put('/notes/' + note._id, note);
  //     console.log(respons);
  //     return respons.data;
  //   },
};

export default AxiosApiNote;
