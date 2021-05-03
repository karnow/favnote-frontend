import React from 'react';
import { useSelector, useStore } from 'react-redux';
import Card from 'components/molecules/Card';
import GridTemplate from 'templates/GridTemplate';
import { getAllNotes, getNoteByID } from '../reducers';

const Notes = () => {
  const notes = useSelector((state) => getAllNotes(state));
  // console.log(notes[1]);
  return (
    <GridTemplate pageType='note'>
      {notes.map((item) => (
        <Card
          key={item.id}
          cardType='note'
          title={item.title}
          content={item.content}
          created={item.created}
          id={item.id}
        />
      ))}
    </GridTemplate>
  );
};
export default Notes;
