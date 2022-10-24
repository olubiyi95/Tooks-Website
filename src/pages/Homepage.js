import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';

const Homepage = () => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //    setTimeout(()=>{
  //     setLoading(false);
  //    }, 3000)
     
  // }, []);

  useEffect(()=>{
    let element = document.querySelector('#homepage');
    element.scrollIntoView({ behavior: "smooth"});
}, []);

  return (
    <div className='homepage' id='homepage'>
      
      <div>
          <Navbar/>
          <Showcase/>
         <Footer/>
      </div>
   
      
      
    </div>
  )
}





export default Homepage