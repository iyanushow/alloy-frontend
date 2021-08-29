import React from 'react';
import { ReactComponent as PhoneImg } from '../../statics/svg/credit.svg';
import Button from '../Button';
import { MainContent, StyledContainer } from './Hero.styles';

const Hero = () => {
  return (
    <StyledContainer>
      <MainContent data-aos='fade-up' data-aos-duration='1000'>
        <h2>transactions in one space</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul>
          <li>simple</li>
          <li>stylish</li>
          <li>secure</li>
        </ul>
        <Button onClick={() => console.log('start')}>get started</Button>
      </MainContent>
      <PhoneImg
        data-aos='slide-left'
        data-aos-duration='1000'
        // data-aos-easing='ease-out-cubic'
      />
    </StyledContainer>
  );
};

export default Hero;
