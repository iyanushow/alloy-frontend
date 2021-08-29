import React, { useState } from 'react';

import RcDrawer from 'rc-drawer';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { RiMenu4Line } from 'react-icons/ri';
import { isMobileOnly, MobileView } from 'react-device-detect';
import {
  StyledClose,
  StyledContent,
  StyledDrawer,
  StyledMenu,
  StyledOpen,
} from './MobileNav.styles';

const MobileNav = ({ menuItems }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  return (
    <>
      <RcDrawer
        open={isNavOpen}
        onClose={toggleNav}
        className='drawer'
        width='300px'
        height='100vh'
        handler={false}
        level={null}
        duration={'0.4s'}
        placement='left'
      >
        <StyledClose onClick={toggleNav}>
          <IoMdClose size='24px' color='#000' />
        </StyledClose>
        <StyledDrawer>
          <StyledContent>
            <StyledMenu>
              {menuItems?.map(({ path, label }, i) => (
                <NavLink key={i} activeClassName='active' to={path}>
                  {label}
                </NavLink>
              ))}
            </StyledMenu>
          </StyledContent>
        </StyledDrawer>
      </RcDrawer>
      <StyledOpen onClick={toggleNav}>
        {' '}
        <RiMenu4Line size='26px' />
      </StyledOpen>
    </>
  );
};

export default MobileNav;
