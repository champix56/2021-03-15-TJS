import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const Footer = (props) => (
  <div className={styles.Footer} data-testid="Footer">
    {props.societe} &copy; {props.year}
  </div>
);

Footer.defaultProps = {
  societe:'Orsys',
  year:new Date().toISOString().substring(0,4)
};

export default Footer;
