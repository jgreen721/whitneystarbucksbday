import React, { useEffect, useState  } from 'react'
import Confetti from 'react-confetti'
import "./BdayModal.css"


const BdayModal = ({showBday}) => {
  const [showConfetti, setShowConfetti] = useState(false)


  useEffect(()=>{
      if(showBday){
        setTimeout(()=>{
        setShowConfetti(true)
     
      
        },2500);
      }

  },[showBday])
  return (
    <div className={showBday ? "bday-modal show-bday" : "bday-modal"}>

        <div className="family-img-div">
         <div className={showBday ? "bday-header animate-header" : "bday-header"}>
        <h1>Happy</h1>
        <h1>Birthday!!</h1>
      </div> 
          <img style={{position:'relative'}} className={showBday ? "family-img animate-img" : "family-img"} src="colinwhitney.jpeg" alt="" />
          {/* <img className="family-img" src="colinwhitney.jpeg" alt="fuckyou" /> */}
        </div>
        {showConfetti && <Confetti/>}
    </div>
  )
}

export default BdayModal