import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import AxiosApiNote from 'api/axiosApi';
import { getAllArticles } from 'reducers';
import { useDispatch } from 'react-redux';
import { addAllArticles } from 'actions';
import { useLocation } from 'react-router';

const Articles = () => {
  const location = useLocation();
  console.log(location.pathname);

  const pageTypes = ['twitters', 'articles', 'notes'];
  const [type] = pageTypes.filter((page) => location.pathname.includes(page));

  const dispatch = useDispatch();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    AxiosApiNote.getAllNotesByType(type, userId)
      .then((result) => {
        console.log(result);
        dispatch(addAllArticles(result));
      })
      .catch((err) => console.log(err));
  }, []);

  const articles = useSelector((state) => getAllArticles(state));
  const long = articles.length;
  return (
    <GridTemplate pageType='article' length={long}>
      {articles.map((item) => (
        <Card
          cardType='article'
          title={item.title}
          content={item.content}
          articleUrl={item.articleUrl}
          created={item.created}
          key={item._id}
          id={item._id}
        />
      ))}
    </GridTemplate>
  );
};

export default Articles;
