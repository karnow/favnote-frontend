import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';

function Root() {
  return (
    <>
      <Router>
        <MainTemplate>
          <Routes>
            <Route path='/' element={<Notes />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/twitters' element={<Twitters />} />
          </Routes>
        </MainTemplate>
      </Router>
    </>
  );
}

export default Root;
