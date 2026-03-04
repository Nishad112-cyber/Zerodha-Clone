import React from "react";
function Universe(){
    return(
        <div className="container">
            <div className="row text-center">
           <h1 className="fs-3">The Zerodha Universe</h1>
           <p>Extend your trading and investment experience even further with our partner platforms</p>
        
            <div className="col-4">
                <img src="images\zerodhaFundhouse.png" alt=""style={{width:"50%"}} />
                <p className="fs-7 mt-3">Our asset management venture
                 that is creating simple and transparent index
                 funds to help you save for your goals.</p>
            </div>
              
              <div className="col-4">
                    <img src="images\sensibullLogo.svg"  alt="" style={{width:"70%"}} />
            <p className="fs-7 mt-3">Options trading platform that lets you
              create strategies, analyze positions, and examine
              data points like open interest, FII/DII, and more.
              </p>
            </div>

            <div className="col-4">
            <img src="images\tijori.svg" alt="" style={{width:"50%"}} />
            <p className="fs-7 mt-2">Investment research platform
               that offers detailed insights on stocks,
               sectors, supply chains, and more.
               </p>
            </div>
               
                <div className="col-4 mt-5">
                <img src="images\streakLogo.png" alt=""style={{width:"50%"}} />
                <p className="fs-7 mt-3">Systematic trading platform
                 that allows you to create and backtest
                 strategies without coding.</p>
            </div>
              
              <div className="col-4 mt-5">
                    <img src="images\smallcaseLogo.png"  alt="" style={{width:"70%"}} />
            <p className="fs-7 mt-3">Thematic investing platform
               that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>

            <div className="col-4 mt-5">
            <img src="images\dittoLogo.png" alt="" style={{width:"40%"}} />
            <p className="fs-7 mt-2">Personalized advice on life
             and health insurance. No spam
             and no mis-selling.
               </p>
            </div>

          <button className='p-2 btn btn-primary fs-5 mt-5'style={{width:"20%", margin:"0 auto"}}>Sign up for free
                </button>
            </div>
        </div>
    );
}


export default Universe;