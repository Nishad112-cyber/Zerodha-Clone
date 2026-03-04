import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return (
      <div className='container mt-5'>
    <div className='row'>
        <div className='col-4'>
          <img src="images/education.svg" alt="education" />
        </div>
        <div className='col-2'></div>
        <div className='col-6'>
            
                    <h1 className='fs-4'>Free and open market education</h1>
               
                   <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                   
                   <Link className= 'mr-4' to="">Varsity  <i class="fa-solid fa-right-long"></i></Link>

                 <p> TradingQ&A, the most active trading and investment community in India for all your market related queries.</p> 

                 <Link className= 'mr-4' to=""> 
          TradingQ&A<i class="fa-solid fa-right-long"></i></Link>
        </div>

    </div>

   </div>
      );
}

export default Education;