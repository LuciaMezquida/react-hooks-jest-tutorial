import React, { useState, useEffect } from 'react'
import './AccountBalance.css'
const AccounBalance = () => {
  const [balance, setBalance] = useState(1500)
  const [savingBalance, setSavingBalance] = useState(1400)
  const [notification, setNotification] = useState(false)

  useEffect(()=> {
    if(balance <= 1000) {
      setNotification(true)
    }
  }, [balance])

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
      {notification && 
      <div className="notification bg-danger">
        <button className="button btn-close btn-close-white" onClick={()=> {
          setNotification(false)
        }}></button>
        <p className='text-white'>Your account balance is too low</p>
        <p className='text-white'>You can't transfer more money today</p>
      </div>
      }
      
    </div>
  )
}
export default AccounBalance;