import React, { useState } from 'react'
const AccounBalance = () => {
  return(
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm">
          <h4 className="title">Your account balance:</h4>
          <div className="amount">1500$</div>
          <button className="btn btn-info" onClick={()=>{console.log('Sending money');}}>Send 100$</button>
        </div>
        <div className="col-sm">
          <h4 className="title">Your saving balance:</h4>
          <div className="amount saving">1390$</div>
          <button className="btn btn-info" onClick={()=>{console.log('Sending money');}}>Send 100$</button>
        </div>
      </div>
    </div>
  )
}
export default AccounBalance;