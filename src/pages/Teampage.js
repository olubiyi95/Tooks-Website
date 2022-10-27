import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Team from '../components/Team'
import Footer from '../components/Footer';

const Teampage = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    effectloader()
     
  }, []);



  useEffect(()=>{
    let element = document.querySelector('#teampage');
    element.scrollIntoView({ behavior: "smooth"});
}, []);


const effectloader = ( )=> {
  setLoading(true);
  setTimeout(()=>{
   setLoading(false);
  }, 4000)
}

  return (
    <div id='teampage'>
        {loading ? <div className='pageloader'>
        <div className="loader">
          <div className="scanner">
            <h1></h1>
          </div>
        </div>
      </div> :
     <div>
     <Navbar/>
     <Team/>
     <Footer/>
     </div>
      }     
    </div>
  )
}

export default Teampage