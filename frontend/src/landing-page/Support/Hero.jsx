import React from 'react';
function Hero() {
      return(
      <section className="container-fluid " id="supportHero">
      <div className=" p-5 mt-5 " id='supportwrapper'>
        <h5>Support Portal</h5>
        <a href="">Track Ticket</a>
       </div>

       <div className="row  " >
        <div className="col-6  " >
          <h4 className='fs-4'>Search for an answer or browse help topics to create a ticket</h4>
          <input
          placeholder='Eg. how do I activate F&O '
          />
           <br></br>
          <a href=''>Track account opening</a>
          <br></br>
          <a href=''>Track segment activation</a>
          <br></br>
          <a href=''>Intraday margins</a>
          <br></br>
          <a href=''>Kite user manual</a>
          <br></br>
        </div>
        <div className="col-6 " >
          <h4  className='fs-4'>Featured</h4>
           <a href=''>Surveillance measure on scrips - March 2026</a>
           <br></br>
          <a href=''>Latest Intraday leverages and Square-off timings</a>
          <br></br>
        </div>
       </div>
        </section>    
      );
}
export default Hero;