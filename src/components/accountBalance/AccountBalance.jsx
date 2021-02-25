import React, { useState } from 'react'
import './AccountBalance.css'
const AccounBalance = () => {
  return(
    <div className="container">
      <div className="row align-items-center">
        <div className="box col-sm shadow p-3 mb-5 bg-body rounded">
          <h4 className="title">Your account balance:</h4>
          <div className="amount">1500$</div>
          <button className="btn btn-info" onClick={()=>{console.log('Sending money');}}>Send 100$</button>
        </div>
        <div className="box col-sm shadow p-3 mb-5 bg-body rounded">
          <h4 className="title">Your saving balance:</h4>
          <div className="amount saving">1390$</div>
          <button className="btn btn-info" onClick={()=>{console.log('Sending money');}}>Send 100$</button>
        </div>
      </div>
    </div>
  )
}
export default AccounBalance;