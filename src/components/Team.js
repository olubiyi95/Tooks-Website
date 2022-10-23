import React, {useEffect} from 'react';
import AOS from 'aos';

const Team = () => {

        useEffect(()=> {
          AOS.init();
        })


  return (
    <div className='team'>
        <div class="container text-center">
            <div className="row flex-row-reverse flex-lg-reverse">
                <div className="col-sm-12 col-md-12 col-lg-8">
                    <div className='team-firstcard'>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className='team-secondcard'>
                        <h3>JOIN THE TEAM</h3>
                        <h2>Re-imagine social-music discovery </h2>
                        <button>CHECK OPEN ROLES</button>
                    </div>
                </div>
            </div>
            <div  data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-delay="200"  data-aos-duration="1000"> 
                <div className='team-secondbase'>
                    <h3>Join a community of music lovers</h3>
                    <div className="container team-top">
                    <p className='team-p1'>OPEN ROLES</p>
                    <div className=" team-secondbase2 "> 
                        <div className="team-secondbase2a">
                            <h4>ROLES</h4>
                            <p>QA internship</p>
                        </div>
                        <div className=" team-secondbase2b">
                            <h4>LOCATION</h4>
                            <p>Boston remote</p>
                        </div>
                        </div>
                        </div>  
                </div>
            </div>



            <div  data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-delay="200"  data-aos-duration="1000"> 
                <div class="container team-thirdbase">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                        <h3 className='team-pa'>Our Team</h3>
                        <h3 className='team-p2'>Would you like to know more?</h3>
                            <button>ABOUT US</button>
                        </div>
                        <div class="col">
                        <div className='team-p3'>
                                HELLO
                                {/* <img src={image1}></img> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team