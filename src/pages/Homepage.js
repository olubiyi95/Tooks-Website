import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';

const Homepage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    effectloader()
  }, []);

  useEffect(()=>{
    let element = document.querySelector('#homepage');
    element.scrollIntoView({ behavior: "smooth"});
}, []);

const effectloader = ( )=> {
  setLoading(true);
  setTimeout(()=>{
   setLoading(false);
  }, 4000)
}


  return (
    <div className='homepage' id='homepage'>
       {loading ? <div className='pageloader'>
        <div className="loader">
          <div className="scanner">
            <h1></h1>
          </div>
        </div>
      </div> :
      <div>
      <Navbar/>
      <Showcase/>
     <Footer/>
  </div>
      }    
     
   
      
      
    </div>
  )
}





export default Homepage