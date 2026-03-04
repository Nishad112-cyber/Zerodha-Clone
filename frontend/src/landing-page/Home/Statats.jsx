import React from 'react';

function Statats() {
    return (
      <div className='container p-5'>
         <div className='row mt-5 p-5'>
          <div className='col-6 p-5'>
            <h3>Trust with confidence</h3>
            <h5>Customer-first always</h5>
           
                <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
           
                <h5>No spam or gimmicks</h5>
                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<a>Our philosophies</a> .</p>
            
                <h5>The Zerodha universe</h5>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            
                <h5>Do better with money</h5>
                <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            
          </div>
          <div className='col-6 p-5'>
            <img src="images/ecosystem.png" style={{width:"95%"}} alt="ecosystem" />
            <div  className='link p-5 '>
                <a href="">Explore our products <i class="fa-solid fa-right-long"></i></a>
                <a  className= 'mr-4' href="">Try Kite demo <i class="fa-solid fa-right-long"></i></a>
            </div>
          </div>
         </div>
      </div>
      );
}

export default Statats;