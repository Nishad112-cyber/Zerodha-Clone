import React from "react";
function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}){
    return(
      <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5 pt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="p-3 ">
              <a href={learnMore} style={{marginLeft:"50px"}}>learnMore</a>
          </div>
        </div>
           <div className="col-6 mb-5 ">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
    );
}

export default RightSection;