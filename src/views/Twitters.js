import React from 'react';
import { useSelector } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { getAllTwitters } from 'reducers';

const Twitters = () => {
  const twitters = useSelector((state) => getAllTwitters(state));
  return (
    <GridTemplate pageType='twitter'>
      {twitters.map((item) => (
        <Card
          cardType='twitter'
          title={item.title}
          content={item.content}
          created={item.created}
          twitterName={item.twitterName}
          key={item.id}
          id={item.id}
        />
      ))}
    </GridTemplate>
  );
};

export default Twitters;
