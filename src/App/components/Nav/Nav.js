import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
const Nav = () => (
  <div className={styles.Nav+' navbar navbar-inverse'} data-testid="Nav">
    <Link className="navbar-brand" to="/">Home</Link>
    <ul className="nav navbar-nav">
      <li className="active">
        <Link to="/thumbnail">Thumbnail</Link>
      </li>
      <li>
        <Link to="/edit">Create</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
