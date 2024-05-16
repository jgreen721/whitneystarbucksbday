import React from 'react'
import "./MenuSection.css"


const FoodItem = ({item,delay})=>{
    return (
    <li className={item.title == 'Feature' ? "food-item focused" : "food-item"}>
        <div className="food-item-content">
            <div className="food-item-img-div">
                <img style={{"--delay":delay + "s"}} className="food-item-img" src={item.img} alt="" />
            </div>
            <h4 style={{"--delay":(delay * 2) + "s"}} className="food-item-name">{item.title}</h4>
        </div>
    </li>
    )
}

const MenuSection = ({section}) => {
    console.log(section.items)
  return (
    <div className="menu-section-parent">
        <h2>{section.title}</h2>
        <div className="line"></div>
        <ul className="section-items">
            {section.items.map((item,idx)=>(
                <FoodItem key={item.id} item={item} delay={idx * .15}/>
            ))}
        </ul>
    </div>
  )
}

export default MenuSection