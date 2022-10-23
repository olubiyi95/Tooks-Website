import React from 'react';

const Contact = () => {
  return (
    <div> 
      <div className='contactpage '>
        <div className="container ">
        <h2 className='contactpage-text'>Get in touch</h2>
          <div className="row">
            <div className="col-sm-12  col-lg-6">
                <div className='contactpage-firstcard'>
                   
                    <h1>We're eager to hear from you</h1>
                    <p>Found a nasty bug? Your friend is a musical genius?Need support? We are ready to talk!</p>
                </div>
            </div>
            <div className="col-sm-12  col-lg-6">
                <div className='contactpage-secondcard'>
                    <input placeholder="Name" type="text" className="input" required=""></input>
                    <input placeholder="Email" type="text" className="input" required=""></input>
                    <input placeholder="Phone" type="text" className="input" required=""></input>
                    <textarea placeholder="Message" type="text" className="input2" required=""></textarea>
                </div>
                <div className='col-sm-12 contact-button'>
            <button>SEND</button>
          </div>
            </div>
          </div>
        </div>
       
        {/* <div className='col-sm-12 contact-button'>
            <button>SEND</button>
          </div> */}
       
       
      </div>
    </div>
  )
}

export default Contact