import React,{ useState, useEffect} from 'react';

const Notification = (props) => {
  const [notification, setNotification] = useState(false)
  useEffect(()=> {
    if(props.balance <= 1000) {
      setNotification(true)
    }
  }, [props.balance])
  return(
    <>
    {notification && 
      <div className="notification bg-danger">
        <button className="button btn-close btn-close-white" onClick={()=> {
          setNotification(false)
        }}></button>
        <p className='text-white'>Your account balance is too low</p>
        <p className='text-white'>You can't transfer more money today</p>
      </div>
      }
      </>
  )
}

export default Notification;