import React from 'react'
import image1 from '../assets/apple.svg';
import image2 from '../assets/linkedin.svg';
import image3 from '../assets/instagram.svg';
import image4 from '../assets/twitter.svg';
import image5 from '../assets/tiktok.svg';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-showcase'>
                <div class="row">
                    <div class="col-sm-2 col-md-2">
                        <h3>Tooks</h3>
                    </div>
                    <div class="col-sm-10 col-md-10 ">
                        <ul className='mx-md-2'>
                            <div className='row'>
                                <div className='col-md-12 d-md-flex justify-center text-md-center '>
                                    <li>Get in touch</li>
                                    <li>About</li>
                                    <li>Join our team</li>
                                    <li>Press kit</li>
                                </div>
                                <ul className=''>
                                    <div className='row'>
                                    <div className='col-md-12 d-md-flex justify-center text-md-center'>
                                        <li>Terms of service</li>
                                        <li>Privacy Policy</li>
                                        <li>DMCAClaim</li>
                                        <li>Counter Claim</li>  
                                    </div>
                                </div>
                             </ul>
                          
                            </div>
                        </ul> 
                    </div>
                    <div class="col-sm-4 ">
                        <div className='footer-image1'>
                            <img src={image1}></img>
                        </div>
                    </div>
                </div>

                <div className='row flex-column-reverse flex-sm-row'>
                    <div className='col-sm-4 col-md-4  '>
                        <p className='footer-p'>	&#169;  Copyright2022 .Tooks inc. All rights reserved</p>
                    </div>
                    <div className='col-sm-8  col-md-6 d-flex justify-center  ms-auto justify-content-around px-0 iconsizes' >
                        <img src={image2} className="footericons"/>
                        <img src={image3} className="footericons"/>
                        <img src={image4} className="footericons"/>
                        <img src={image5} className="footericons"/>
                    </div>
                    
                </div>
        </div>
    </div>
  )
}

export default Footer