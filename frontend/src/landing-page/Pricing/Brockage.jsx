import React from "react";
function Brockage(){
    return(
        <div className="container mt-5 " style={{marginLeft: "60px"}}>
            <h3>Brokerage calculator</h3>
            <ul className="mt-5">
                <li><p>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order</p></li>
                <li><p>Digital contract notes will be sent via e-mail.</p></li>
                <li><p>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</p></li>
                <li><p>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</p></li>
                <li><p>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower)</p></li>
                <li><p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p></li>
            </ul>
        </div>
    )
}

export default Brockage;