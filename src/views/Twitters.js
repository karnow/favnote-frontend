import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import AxiosApiNote from 'api/axiosApi';
import { getAllTwitters } from 'reducers';
import { useDispatch } from 'react-redux';
import { addAllTwitters } from 'actions';
import { useLocation } from 'react-router';

const Twitters = () => {
  const location = useLocation();
  console.log(location.pathname);

  const pageTypes = ['twitters', 'articles', 'notes'];
  const [type] = pageTypes.filter((page) => location.pathname.includes(page));
  console.log(type);

  const dispatch = useDispatch();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    AxiosApiNote.getAllNotesByType(type, userId)
      .then((result) => {
        console.log(result);
        dispatch(addAllTwitters(result));
      })
      .catch((err) => console.log(err));
  }, []);

  const twitters = useSelector((state) => getAllTwitters(state));
  const long = twitters.length;
  return (
    <GridTemplate pageType='twitter' length={long}>
      {twitters.map((item) => (
        <Card
          cardType='twitter'
          title={item.title}
          content={item.content}
          created={item.created}
          twitterName={item.twitterName}
          key={item._id}
          id={item._id}
        />
      ))}
    </GridTemplate>
  );
};

export default Twitters;
