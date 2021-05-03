import React from 'react';
import { useSelector } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { getAllArticles } from 'reducers';

const Articles = () => {
  const articles = useSelector((state) => getAllArticles(state));
  return (
    <GridTemplate pageType='article'>
      {articles.map((item) => (
        <Card
          cardType='article'
          title={item.title}
          content={item.content}
          articleUrl={item.articleUrl}
          created={item.created}
          key={item.id}
          id={item.id}
        />
      ))}
    </GridTemplate>
  );
};

export default Articles;
