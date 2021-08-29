import React from 'react';
import styles from './stylesheet/Hero.module.css';
import { ReactComponent as PhoneImg } from '../../statics/svg/credit.svg';

const Hero = () => {
  return (
    <section className={`${styles.container} container`}>
      <div className={styles.mainContent} data-aos='fade-up' data-aos-duration='1000'>
        <h2>transactions in one space</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <ul>
          <li>simple</li>
          <li>stylish</li>
          <li>secure</li>
        </ul>
        <button className={styles.btn}>get started</button>
      </div>
      <PhoneImg
        data-aos='slide-left'
        data-aos-duration='1000'
        // data-aos-easing='ease-out-cubic'
      />
    </section>
  );
};

export default Hero;
