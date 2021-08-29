import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { StyledContent } from './NotFound.styles';

const NotFound = () => {
  return (
    <StyledContent>
      <h3>!Error 404: Page NOT found</h3>
      <p>The page you are looking for might be removed or is temporarily unavailable</p>
      <Link to='/'>
        <Button>Back To Hompage</Button>
      </Link>
    </StyledContent>
  );
};

export default NotFound;
