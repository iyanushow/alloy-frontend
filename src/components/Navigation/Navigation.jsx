import React, { useEffect, useState } from 'react';

import { FaHome } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import { GiJumpAcross } from 'react-icons/gi';
import { IoCardSharp, IoCloseSharp } from 'react-icons/io5';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { isMobileOnly, MobileView } from 'react-device-detect';
import { AiFillHome, AiOutlineBars } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledNav } from './Navigation.styles';
import MobileNav from '../molecules/MobileNav/MobileNav';

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const [mobile, setMobile] = useState(false);

  const setSize = () => {
    if (window.innerWidth < 767) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  useEffect(() => {
    setSize();
    window.addEventListener('resize', setSize);
    return () => {
      window.removeEventListener('resize', setSize);
    };
  }, []);

  const menuItems = [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: 'features',
      label: 'Features',
    },
    {
      path: 'about-us',
      label: 'About Us',
    },
    {
      path: 'contact',
      label: 'Contact Us',
    },
  ];

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <MobileNav menuItems={menuItems} />
          {/* <Logo /> */}
          {/* <ul>
            {menuItems.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path} activeClassName='active'>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul> */}
        </StyledNav>
      </StyledHeader>
    </>
  );
};

export default Navigation;
