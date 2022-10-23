import {useState, useEffect} from 'react'
import { Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Teamcpage from './pages/Teampage';


function App() {

const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
   setTimeout(()=>{
    setLoading(false);
   }, 3000)
   
}, []);

  return (
    <div >
     {loading ? <div className='pageloader'>
        <div className="loader">
          <div className="scanner">
            <h1></h1>
          </div>
        </div>
      </div> :
        <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/contact' element={<Contactpage/>}/>
      <Route path='/team' element={<Teamcpage/>}/>
   </Routes> }
    </div>
  );
}

export default App;
