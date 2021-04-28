import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Note from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';

function Root() {
  return (
    <>
      <MainTemplate>
        <Router>
          <Routes>
            <Route path='/' element={<Note />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/twitters' element={<Twitters />} />
          </Routes>
        </Router>
      </MainTemplate>
    </>
  );
}

export default Root;
