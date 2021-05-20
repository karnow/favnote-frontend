import React, { useContext, useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import DetailsTemplate from 'templates/DetailsTemplate';
import PageContext from 'context/PageContext';
import AxiosApiNote from 'api/axiosApi';
import { addCurrentNote } from 'actions';
import { getCurrentNote } from 'reducers';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { noteId, twitterId, articleId } = useParams();
  const pageType = useContext(PageContext);

  let id = null;

  if (pageType.pageType === 'note') {
    id = noteId;
  }
  if (pageType.pageType === 'twitter') {
    id = twitterId;
  }
  if (pageType.pageType === 'article') {
    id = articleId;
  }
  console.log(noteId);
  console.log(twitterId);
  console.log(articleId);

  // const location = useLocation();
  // const { state } = location;

  // console.log(state.id);
  // console.log(location.pathname);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    AxiosApiNote.getNoteById(id, userId)
      .then((result) => {
        console.log(result);
        dispatch(addCurrentNote(result));
      })
      .catch((err) => console.log(err));
  }, []);

  const noteFromReducer = useSelector((state) => getCurrentNote(state));
  console.log(noteFromReducer);

  return (
    <>
      <DetailsTemplate
        pageType={pageType.pageType}
        title={noteFromReducer.title}
        created={noteFromReducer.created}
        content={noteFromReducer.content}
        twitterName={noteFromReducer.twitterName}
        articleUrl={noteFromReducer.articleUrl}
        id={noteFromReducer._id}
      />
    </>
  );
};

export default DetailsPage;
