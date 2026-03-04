import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return (  
   <div className='container'>
    <div className='row'>
        <div className='col-4'>
          <h1 className='mb-3 fs-3'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <Link className= 'mr-4' to="">See pricing <i class="fa-solid fa-right-long"></i></Link>
        </div>
        <div className='col-2'></div>
        <div className='col-6'>
            <div className='row text-center'>
                <div className='col p-2 border'>
                    <h5> <i class="fa-solid fa-indian-rupee-sign"></i> 0</h5>
                    <p>Free equity delivery and direct mutual funds</p>
                </div>
                <div className='col p-2 border'>
                    <h5> <i class="fa-solid fa-indian-rupee-sign"></i>20</h5>
                    <p>Intraday & fno</p>
                </div>
               
            </div>
        </div>

    </div>

   </div>
    );
}

export default Pricing;