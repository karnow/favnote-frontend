import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';

const twitters = [
  {
    id: 1,
    title: 'Hello Roman ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'hello_roman',
  },
  {
    id: 2,
    title: 'Redux guy',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'dan_abramov',
  },
  {
    id: 3,
    title: 'React router stuffkkk',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
    twitterName: 'mjackson',
  },
  {
    id: 4,
    title: 'Super animacje!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
    twitterName: 'sarah_edo',
  },
];

const Twitters = () => (
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

export default Twitters;
