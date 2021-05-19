import React, { useEffect } from 'react';
import { useSelector, useStore } from 'react-redux';
import Card from 'components/molecules/Card';
import GridTemplate from 'templates/GridTemplate';
import { getAllNotes, getNoteByID } from '../reducers';
import AxiosApiNote from 'api/axiosApi';
import { useDispatch } from 'react-redux';
import { addAllNotes } from 'actions';
import { useLocation } from 'react-router';
import { getUserId } from 'reducers';

const Notes = () => {
  const location = useLocation();
  console.log(location.pathname);

  const pageTypes = ['twitters', 'articles', 'notes'];
  const [type] = pageTypes.filter((page) => location.pathname.includes(page));
  console.log(type);

  const dispatch = useDispatch();

  const userId = localStorage.getItem('userId');
  console.log(userId);

  useEffect(() => {
    AxiosApiNote.getAllNotesByType(type, userId)
      .then((result) => {
        console.log(result);
        dispatch(addAllNotes(result));
      })
      .catch((err) => console.log(err));
  }, []);

  const notes = useSelector((state) => getAllNotes(state));
  const long = notes.length;
  console.log(notes);
  return (
    <GridTemplate pageType='note' length={long}>
      {notes.map((item) => (
        <Card
          key={item._id}
          cardType='note'
          title={item.title}
          content={item.content}
          created={item.created}
          id={item._id}
        />
      ))}
    </GridTemplate>
  );
};
export default Notes;
