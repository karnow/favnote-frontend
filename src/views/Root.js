import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import DetailsPage from 'views/DetailsPage';

function Root() {
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
