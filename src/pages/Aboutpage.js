import React, {useEffect, useState}  from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About'

const Aboutpage = () => {


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
     setTimeout(()=>{
      setLoading(false);
     }, 3000)
     
  }, []);

  useEffect(()=>{
    let element = document.querySelector('#aboutpage');
    element.scrollIntoView({ behavior: "smooth"});
}, []);


  return (
    <div id='aboutpage'>
       {loading ? <div className='pageloader'>
        <div className="loader">
          <div className="scanner">
            <h1></h1>
          </div>
        </div>
      </div> :
      <div>
        <Navbar/>
        <About/>
        <Footer/>
        </div>
      }    
    </div>
  )
}

export default Aboutpage