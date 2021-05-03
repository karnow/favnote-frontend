import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';
import DetailsTemplate from 'templates/DetailsTemplate';

const DetailsPage = () => {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  const { state } = location;
  console.log(location);

  return (
    <>
      <DetailsTemplate
        pageType={state.cardType}
        title={state.title}
        created={state.created}
        content={state.content}
        twitterName={state.twitterName}
        articleUrl={state.articleUrl}
        id={state.id}
      />
    </>
  );
};

export default DetailsPage;
