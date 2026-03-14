import React from "react";
import googlePlayImg from '../../images/googlePlayBadge.svg';
import appstoreImg from '../../images/appstoreBadge.svg';
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="p-3">
              <a href={tryDemo}>try Demo</a>
              <a href={learnMore} style={{marginLeft:"50px"}}>learnMore</a>
          </div>
          <div className="p-3 ">
               <a href={googlePlay}>
            <img src={googlePlayImg} alt="Google Play" />
          </a>
          <a href={appStore} style={{marginLeft:"50px"}}>
           <img src={appstoreImg} alt="App Store" />
          </a>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
