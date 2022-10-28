import React from 'react';
import { Link } from "react-router-dom";
import image from '../assets/menu.svg'

const Navbar = () => {
  return (
    <div className='page-navbar fixed-top'>
        <nav className="navbar navbar-expand-lg bg-dark py-2 ">
            <div className="container page-navbar-header px-0">
                <Link className="navbar-brand" to="/"><h1 className='text-light'>Tooks</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <img  className ="navimage" src={image}></img>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/contact">Get in touch</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/team">Join our team</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav> 
    </div>
  )
}

export default Navbar