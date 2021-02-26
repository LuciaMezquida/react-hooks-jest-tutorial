import React, { useState } from 'react'
import './AccountBalance.css'
import Notification from '../Notification/Notification'


const AccounBalance = () => {
  const [balance, setBalance] = useState(1500)
  const [savingBalance, setSavingBalance] = useState(1400)

  const handleSpending = () => {
    if(balance > 1000) {
      setBalance(balance - 100)
      setSavingBalance(savingBalance + 100)
    }
  }
  const handleSaving = () => {
    setBalance(balance + 100)
    setSavingBalance(savingBalance - 100)
  }
  return(
    <div className="container">
      <h1>Welcome in the personal finance app!</h1>
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
      <Notification balance={balance}/>
    </div>
  )
}
export default AccounBalance;