import React, { useState } from 'react'
const AccounBalance = () => {
  return(
    <div className="column">
      <div className="column">
        <div className="box">
          <h4 className="title is-4">Your account balance:</h4>
          <div className="amount">1500$</div>
          <button className="button is-info" onClick={()=>{console.log('Sending money');}}>Send 100$</button>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <h4 className="title is-4">Your saving balance:</h4>
          <div className="amount saving">1390$</div>
          <button className="button is-info" onClick={()=>{console.log('Sending money');}}>Send 100$</button>
        </div>
      </div>
    </div>
  )
}
export default AccounBalance;