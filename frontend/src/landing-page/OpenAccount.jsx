import React from 'react';

function OpenAccount() {
    return ( 
         <div className='container p-5'>
            <div className='row text-center'>
                <img src="images/homeHero.png" alt="Hero Image" />
                <h2 className='mt-5 fs-4'>Open a Zerodha account</h2>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5'style={{width:"20%", margin:"0 auto"}}>Sign up for free
                </button>
            </div>

        </div>
     );
}

export default OpenAccount;