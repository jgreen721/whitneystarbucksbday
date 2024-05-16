import React from 'react'
import "./MenuRow.css"


const LinkItem = ({link})=>{


  return (
    <li className={link.linkName == "Featured" ? "menu-link-item focused" : "menu-link-item"}>
      <h5>{link.linkName}</h5>
    </li>
  )
}

const MenuRow = ({links}) => {
  return (
    <div className="links-row">
      <ul className="links">
        {links.map(link=>(
          <LinkItem key={link.id} link={link}/>
        ))}
      </ul>
    </div>
  )
}

export default MenuRow