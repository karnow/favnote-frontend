import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ pageType, theme }) => theme[pageType]};
  border-radius: 50px;
  background-size: 35%;
  z-index: 10000;
`;

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder='Search' />
        <StyledHeading big as='h1'>
          {pageType}
        </StyledHeading>
        <StyledParagraph>6 {pageType}</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
      <StyledButtonIcon onClick={() => ''} icon={plusIcon} pageType={pageType} />
      <NewItemBar pageType={pageType} />
    </StyledWrapper>
  </UserPageTemplate>
);

// GridTemplate.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.object).isRequired,
//   pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
// };

// GridTemplate.defaultProps = {
//   pageType: 'notes',
// };

export default GridTemplate;
