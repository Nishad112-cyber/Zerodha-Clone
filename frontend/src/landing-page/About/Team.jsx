import React from "react";
import kamathImg from '../../images/nithinKamath.jpg';
function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 ">
        <h1 className=" text-center ">People</h1>
      </div>
      <div className="row p-5">
        <div className="col-6  mt-5">
         <img src={kamathImg} alt="Kamath" className="circle-img" 
          style={{
            width: "325px",
    height: "325px",
    borderRadius: "50%",
    objectFit: "cover",
     marginLeft: "50px",
            }} />
            <div className="ml-5" style={{marginLeft: "60px"}}>
            <h3>Nithin Kamath</h3>
            <p>Founder, CEO</p>
            </div>
        </div>
        <div className="col-6 p-5 mt-5 fs-5">
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry.<br></br><br></br>
          <p> 
            He
          is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
          the Market Data Advisory Committee (MDAC).</p> 
          <p>
          Playing basketball is his
          zen.<br></br><br></br>
           Connect on <a href="">Homepage </a> /<a href="">TradingQnA </a> / <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
