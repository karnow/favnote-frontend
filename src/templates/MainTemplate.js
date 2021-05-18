import React, { useState } from 'react';
import { useLocation } from 'react-router';
import PageContext from 'context/PageContext';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);

  const pageTypes = ['twitter', 'article', 'note'];
  const [currentPage] = pageTypes.filter((page) => location.pathname.includes(page));
  console.log(currentPage);
  return (
    <div>
      <PageContext.Provider value={{ pageType: currentPage }}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
