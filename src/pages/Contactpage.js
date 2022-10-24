import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Contactpage = () => {

  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
   setTimeout(()=>{
    setLoading(false);
   }, 4000)
   
}, []);

  useEffect(()=>{
    let element = document.querySelector('#contact');
    element.scrollIntoView({ behavior: "smooth"});
}, []);

  return (
    <div id='contact'>
         {loading ? <div className='pageloader'>
        <div className="loader">
          <div className="scanner">
            <h1></h1>
          </div>
        </div>
      </div> :
      <div>
      <Navbar/>
      <Contact/>
      <Footer/>
      </div>
      }    
    </div>
  )
}

export default Contactpage