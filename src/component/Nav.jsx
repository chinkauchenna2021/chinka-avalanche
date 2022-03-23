import React from 'react';
import logo2 from '../logo2.png';
import {Link} from 'react-router-dom';
import App from '../App';

function Nav({connection}) {
    return (

<nav className="navbar navbar-light bg-dark">
  <div className="container-fluid pl-4 pr-4">
    {/* <a className="navbar-brand" href="#"> */}
      <Link to={'/'} components={App} className="navbar-brand" >
      <img
        src={logo2}
        height="60"
        width="80"
        alt="AvaxStorm"
        loading="lazy"
      />
      </Link>
    {/* </a> */}

    <div>
        <button className="btn btn-outline-danger">{connection}</button>
    </div>
  </div>
</nav>

    );
}

export default Nav;
