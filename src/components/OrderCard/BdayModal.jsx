import React from 'react'
import Confetti from 'react-confetti'


const BdayModal = () => {
  return (
    <div className="bday-modal">
   
        <div className="family-img-div">
        <div className="bday-header">
        <h1>Happy</h1>
        <h1>Birthday!!</h1>
      </div>
          <img className="family-img" src="colinwhitney.jpeg" alt="" />
        </div>
        <Confetti/>
    </div>
  )
}

export default BdayModal