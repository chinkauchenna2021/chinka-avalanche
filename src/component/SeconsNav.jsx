import React from 'react';
import {Link} from 'react-router-dom';
import App from '../App';



function SecondNav({avax,eth,bnb,xrp,ada,cake,shib,doge,avaxer,ethas,bnber,xrper,adaer,caker,shiber,dogeer}){

return (
   
<nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{}}>
  <div className="container-fluid">
    <a className="navbar-brand fs-4 text-danger" style={{fontWeight:'bold'}} href="#"><Link to='/' exact components={App} className=" d-flex ign-items-center justify-content-center" style={{textDecoration:'none',height:'100%'}}>AvaxStorm</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex align-items-center justify-content-center" >
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link active text-danger" href="#" onClick={avaxer}>{avax}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#" onClick={ethas}>{eth}</a>
          </li>
          <li className="nav-item">
          <a className="nav-link text-danger" href="#" onClick={bnber}>{bnb}</a>
          </li>
          <li className="nav-item">
          <a className="nav-link text-danger" href="#" onClick={xrper}>{xrp}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#" onClick={adaer}>{ada}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#" onClick={caker}>{cake}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#" onClick={shiber}>{shib}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#" onClick={dogeer}>{doge}</a>
        </li>
     
      </ul>
      <div className="d-flex">
          {/* <div className="text-dark fs-5 me-3  disabled d-md-none">Login</div>
          <div className="text-dark fs-5  disabled">Register</div> */}
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button> */}
      </div>
    </div>
  </div>
</nav>




);



}

export default SecondNav;