import React from 'react';
import brokerImg from '../../images/largestBroker.svg';
function Award() {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5'>
                <img src={brokerImg} alt="largestBroker" 
                 style={{width:"90%"}}
                 />
                </div>
                <div className='col-6 mt-5 '>
                    <h2>Largest stack broker in india</h2>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    
                        <div className='row '>
                        <div className='col-6'>
                            <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                        </ul>
                         </div>
                         <div className='col-6'>
                            <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Government</p>
                        </li>
                    </ul>
                </div>
                </div>
                <img src="images/pressLogos.png" style={{width:"90%"}}alt="press" />
                </div>
            </div>
        </div>
    );
}

export default Award;