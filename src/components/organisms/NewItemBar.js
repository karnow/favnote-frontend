import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s ease-in-out;
`;
const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;
const StyledInput = styled(Input)`
  margin-top: 30px;
`;
const NewItemBar = ({ pageType, isVisible }) => {
  return (
    <StyledWrapper isVisible={isVisible} activeColor={pageType}>
      <Heading>Create new {pageType}</Heading>
      <StyledInput placeholder={pageType === 'twitter' ? 'Account Name' : 'title'} />
      {pageType === 'article' && <StyledInput placeholder='link' />}
      <StyledTextArea as='textarea' placeholder='description' />
      <Button activeColor={pageType}>Add Note</Button>
    </StyledWrapper>
  );
};

export default NewItemBar;
