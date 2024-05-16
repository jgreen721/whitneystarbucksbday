import React from 'react'
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import "./FixedSelector.css"

const FixedSelector = () => {
  return (
    <div className="fixed-selector">
            <div className="icon-div"></div>
            <div className="select-form-div">
                <h4 className="faded">For item availability</h4>
                <select className="select-form" id="">
                    <option value="">Choose a store</option>
                </select>
            </div>
            <div className="icon-div">
                <PiSuitcaseSimpleLight className="suitecase-icon" />
            </div>
    </div>
  )
}

export default FixedSelector