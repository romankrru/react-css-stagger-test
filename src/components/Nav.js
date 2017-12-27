import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => (
  <div>
    <Link to="/">Main page | </Link>
    <Link to="/stagger">Page with react-css-stagger</Link>
  </div>
);

export default Nav;