import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;
const StyledLinksList = styled(ButtonIcon)`
  margin-bottom: 4px;
`;

const Sidebar = ({ pageType }) => {
  function logout() {
    localStorage.removeItem('userId');
  }
  return (
    <StyledWrapper activeColor={pageType}>
      <StyledLogoLink to='/' />

      <StyledLinksList as={NavLink} to='/notes' icon={penIcon} />
      <StyledLinksList as={NavLink} to='/twitters' icon={twitterIcon} />
      <StyledLinksList as={NavLink} to='/articles' icon={bulbIcon} />
      <StyledLogoutButton as={NavLink} to='/' onClick={() => logout()} icon={logoutIcon} />
    </StyledWrapper>
  );
};

Sidebar.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default Sidebar;
