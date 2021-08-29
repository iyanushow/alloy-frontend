import React from 'react';
import Sticky from 'react-stickynode';
import Navigation from '../Navigation';
import { StyledMain, StyledSticky } from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <>
      <StyledSticky innerZ={1001} top={0} innerActiveClass='sticky'>
        <Navigation />
      </StyledSticky>
      <StyledMain id='content'>{children}</StyledMain>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
