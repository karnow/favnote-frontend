import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import { Link } from 'react-router-dom';
import { removeResource } from '../../actions';
import AxiosApiNote from 'api/axiosApi';
import PageContext from 'context/PageContext';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  :first-of-type {
    z-index: 9999;
  }
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 47px;
  height: 47px;
  border: 3px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
  /* transform: translateY(50%); */
`;
function Card({ id, cardType, title, created, twitterName, articleUrl, content }) {
  const userId = localStorage.getItem('userId');
  // const { pageType } = useContext(PageContext);
  // console.log(pageType);
  const dispatch = useDispatch();
  return (
    <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
        <Link
          to={`/${cardType}/${id}`}
          state={{
            cardType: cardType,
            title: title,
            created: created,
            content: content,
            twitterName: twitterName,
            articleUrl: articleUrl,
            id: id,
          }}
        >
          <StyledHeading>{title}</StyledHeading>
        </Link>
        <DateInfo>{created}</DateInfo>
        {cardType === 'twitter' && <StyledAvatar src={twitterName} />}
        {cardType === 'article' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex activeColor='white'>
        <Paragraph>{content}</Paragraph>
        <Button
          secondary
          onClick={() => {
            AxiosApiNote.deleteNote(id, userId).then((result) => {
              console.log(result);
              dispatch(removeResource(id, cardType));
            });
          }}
        >
          REMOVE
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'note',
  twitterName: null,
  articleUrl: null,
};

export default Card;
