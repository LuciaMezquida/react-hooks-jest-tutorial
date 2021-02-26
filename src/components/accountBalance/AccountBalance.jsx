import React, { useState } from 'react'
import './AccountBalance.css'
const AccounBalance = () => {
  const [balance, setBalance] = useState(1500)
  const [savingBalance, setSavingBalance] = useState(1390)

  const handleSpending = () => {
    setBalance(balance - 100)
    setSavingBalance(balance + 100)
  }
  const handleSaving = () => {
    setBalance(balance + 100)
    setSavingBalance(balance - 100)
  }
  return(
    <div className="container">
      <div className="row align-items-center">
        <div className="box col-sm shadow p-3 mb-5 bg-body rounded">
          <h4 className="title">Your account balance:</h4>
          <div className="amount">{`${balance}$`}</div>
          <button className="btn btn-info" onClick={handleSpending}>Send 100$</button>
        </div>
        <div className="box col-sm shadow p-3 mb-5 bg-body rounded">
          <h4 className="title">Your saving balance:</h4>
          <div className="amount saving">{`${savingBalance}$`}</div>
          <button className="btn btn-info" onClick={handleSaving}>Send 100$</button>
        </div>
      </div>
      <div className="notification bg-danger">
        <button className="button btn-close btn-close-white"></button>
        <p className='text-white'>Your account balance is too low</p>
        <p className='text-white'>You can't transfer more money today</p>
      </div>
    </div>
  )
}
export default AccounBalance;