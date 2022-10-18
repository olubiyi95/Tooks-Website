import React from 'react';
import {useEffect} from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='page-navbar fixed-top'>
        <nav className="navbar navbar-expand-lg bg-dark py-2 ">
            <div className="container page-navbar-header px-0">
                <a className="navbar-brand" href="#"><h1 className='text-light'>Tooks</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Get in touch</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Join our teamcing</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav> 
    </div>
  )
}

export default Navbar