import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import { useSelector, useStore } from 'react-redux';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import DetailsPage from 'views/DetailsPage';
import { getAllNotes, getNoteByID } from '../reducers';

function Root() {
  // const store = useStore();
  // const res = store.getState();
  // console.log(res);
  // const notes = useSelector((state) => getAllNotes(state));
  // console.log(notes[0]);
  // const n = useSelector((state) => getNoteByID(state, '1'));
  // console.log(n);

  return (
    <>
      <Router>
        <MainTemplate>
          <Routes>
            <Route path='/' element={<Notes />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/note/:noteId' element={<DetailsPage />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/article/:articleId' element={<DetailsPage />} />
            <Route path='/twitters' element={<Twitters />} />
            <Route path='/twitter/:twitterId' element={<DetailsPage />} />
          </Routes>
        </MainTemplate>
      </Router>
    </>
  );
}

export default Root;
