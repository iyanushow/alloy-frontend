import React from 'react';
import { Link } from 'react-router-dom';
import styles from './stylesheet/NotFound.module.css';
const NotFound = () => {
  return (
    <div className={`container ${styles.content}`}>
      <h3>!Error 404: Page NOT found</h3>
      <p>
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <Link to='/'>
        <button className={styles.btn}>Back To Hompage</button>
      </Link>
    </div>
  );
};

export default NotFound;
