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

// const StyledLinksList = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
// `;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogoLink to='/' />
    <NavLink to='/notes'>
      <ButtonIcon icon={penIcon} activeclass='active' />
    </NavLink>

    <ButtonIcon as={NavLink} to='/twitters' icon={twitterIcon} activeclass='active' />

    <ButtonIcon as={NavLink} to='/articles' icon={bulbIcon} activeclass='active' />

    <StyledLogoutButton as={NavLink} to='/login' icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default Sidebar;