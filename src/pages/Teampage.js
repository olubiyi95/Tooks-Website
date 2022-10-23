import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Team from '../components/Team'
import Footer from '../components/Footer';

const Teampage = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
     setTimeout(()=>{
      setLoading(false);
     }, 3000)
     
  }, []);



  useEffect(()=>{
    let element = document.querySelector('#teampage');
    element.scrollIntoView({ behavior: "smooth"});
}, []);

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