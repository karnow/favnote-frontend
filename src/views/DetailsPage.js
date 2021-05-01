import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';
import DetailsTemplate from 'templates/DetailsTemplate';

const DetailsPage = () => {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  const { state } = location;
  console.log(state);

  return (
    <>
      <DetailsTemplate pageType={state.cardType}>
        <h1>{state.title}</h1>
        <p>{state.content}</p>
        <p>{state.cardType}</p>
      </DetailsTemplate>
    </>
  );
};

export default DetailsPage;
