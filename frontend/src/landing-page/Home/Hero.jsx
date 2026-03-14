import React from 'react';
import heroImg from '../../images/homeHero.png';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src={heroImg} alt="Hero Image" />
                <h2 className='mt-5'>Invest in everything</h2>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5'style={{width:"20%", margin:"0 auto"}}>Sign up for free
                </button>
            </div>

        </div>
     );
}

export default Hero;