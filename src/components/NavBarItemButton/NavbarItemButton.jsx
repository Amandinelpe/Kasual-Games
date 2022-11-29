import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarItemButton.css';

const NavbarItemButton = (props) => {
    const { data } = props;

    return (
      <li>
        <Link className='nav-button-link' to={data.link}>
          <button className="nav-button"><p>{data.name}</p></button>
        </Link>
      </li>
    );
}

export default NavbarItemButton;
