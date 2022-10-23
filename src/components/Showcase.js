import React, {useEffect} from 'react';
import AOS from 'aos';
import Marquee from "react-fast-marquee";
import slider1 from '../assets/slider1.jpeg';
import slider2 from '../assets/slider2.jpeg';
import slider3 from '../assets/slider3.jpeg';
import slider4 from '../assets/slider4.jpeg';
import slider5 from '../assets/slider5.jpeg';
import slider6 from '../assets/slider6.jpeg';
import slider7 from '../assets/slider7.jpeg';
import slider8 from '../assets/slider8.jpeg';
import slider9 from '../assets/slider9.jpeg';





const items = [
    {image:slider1, text:" Every college student needs to download Tooks - Dave"},
    {image:slider2, text:"I find music sooo quickly - Rita"},
    {image:slider3, text:"I have waited years for an app like this - Sara"},
    {image:slider4, text:"How is this app not in the top charts? - Jess"}
]

const items2 = [
    {image:slider7, text:"This is my favourite app for finding new songs - Audrey"},
    {image:slider5, text:"Very addictive - Jeff"},
    {image:slider8, text:"I always find songs like i didn't know before - Casey"},
    {image:slider9, text:"Every college student needs to download Tooks - Dave"},
    {image:slider6, text:"Every college student needs to download Tooks - Tess"}
]



const Showcase = () => {

  useEffect(()=> {
    AOS.init();
  });
  
  
 

  return (
    <div className='showcase '>      
      <div className="container showcase-container" >
        <div className="card showcase-firstcard " ></div>

            <div className="card showcase-secondcard" >
            <h3>Drop your music.</h3>
            <h3>Find your fans</h3>
             <h3 className='showtext'>All in one place.</h3> 
             <p className='py-3'>The best social music discovery platfirm with, millions of new songs discovered. </p>
             <p className=''><span className='showtext'>Join</span> the early access waitlist <span className='showtext'>now</span></p>
            <div className='showcase-button'>
                <button>I'M AN ARTIST</button>
                <button>I'M A LISTENER</button>
            </div>
            </div>
        </div>

        <div  data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-delay="200"  data-aos-duration="1000">
            <h3 className='showtext2'>A proud portfolio company of </h3>
            <div className='showcase-container2 '>
                <div className='card showcase-thirdcard'></div>
                <div className='card showcase-fourthcard'></div>
            </div>
        </div>

         <div  data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-delay="200"  data-aos-duration="1000"> 
            <div className='showcase-container3'>
                <div className='card showcase-fifthcard'>
                    <h4 className='showtext3'>Capture your viral moment on Gen-Z's music discovery app.</h4>
                    <p  className='showtext4'>Find devoted fans in a community of music fanatics. We save you time on promotion so you can focus on the art, building genuine fans from the start.</p>
                </div>

                <div className='card showcase-sixthcard'></div>
            </div>
         </div> 

        <div  data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-delay="200"  data-aos-duration="1000">
            <div className='showcase-container4'>
                <div className='card showcase-seventhcard'>
                    <h3 className='showtext5'>Track your listener analytics</h3>
                    <p>Identify valuable trends among your fans of any genre. Learn what works and what doesn't.</p>
                </div>
                <div className='card showcase-eightcard'></div>
            </div>
        </div> 
        <div  data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-delay="200"  data-aos-duration="1000">
            <div className='showcase-container5'>
                <div className='card showcase-ninthcard'>
                    <h3 className='showtext6'>Full ownership, because it shouldn't be any other way.</h3>
                    <p>We are only here to help you find your fans. You keep 100% ownership over your music, likeness, name amd brand.</p>
                </div>
                <div className='card showcase-tenthcard'></div>
            </div>
        </div>        
        <div  data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-delay="200"  data-aos-duration="1000"> 
            <div className='showcase-container6'>
                <div className='card showcase-eleventhcard'>
                    <h3 className='showtext7'>All-in-one tool to promote, store, & manage music</h3>
                    <p>Our artist platform provides you access to the most innovative industry tools, at a fraction of the cost.</p>
                    <p>Tooks Studio is <span className='showtext'> $12.99/mo</span>  or  <span className='showtext'> $99.99/year.</span></p>
                    <p><span className='showtext'> Join</span> the waitlist and get 6 months of access for free.</p>
                </div>
                <div className='card showcase-twelvethcard'></div>
            </div>
          </div> 
         <div className='showcase-container7'>
            <h3 className='showtext7'>Testimonials</h3>
            <Marquee direction="right" speed={80} >
                {items.map((item => {
                    return <div className=' slider1'>
                        <div className='imageslider'>
                            <img className='image' src={item.image}></img>
                        </div>
                        <div className='wordslider'>
                            <p>{item.text}</p>
                        </div>
                    </div>
                }))}   
            </Marquee>
         </div>
         <div className='showcase-container8'>
            <Marquee direction="left" speed={80} >
            {items2.map((item1 => {
                    return <div className=' slider1'>
                        <div className='imageslider'>
                            <img className='image' src={item1.image}></img>
                        </div>
                        <div className='wordslider'>
                            <p>{item1.text}</p>
                        </div>
                    </div>
                }))}  
              </Marquee>
         </div>
        
         <div  data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-delay="200"  data-aos-duration="1000"> 
            <div className='showcase-container9'>
                <div className=' showcase-thirteenthcard'>
                    <p>Stay Independent</p>
                    <h3>Keep doing what you love & let us take care of the rest.</h3>
                    <h3>Join our movement.</h3>
                    <div className='showcase-button2'>
                        <button>FOR ARTISTS</button>
                        <button>FOR LISTENERS</button>
                    </div>
                </div>
                <div className=' showcase-fourteenthcard'>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Showcase



 

           