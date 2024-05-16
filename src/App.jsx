import { useState, useEffect } from 'react'
import {Navbar, MenuRow,MenuSection,FixedSelector,OrderCard} from "./components"
import './App.css'

function App() {
    const [sections,setSections] = useState([])
    const [links,setLinks] = useState([])

  useEffect(()=>{
      fetch("data.json")
      .then(res=>res.json())
      .then(res=>{
        console.log("Res",res);
        setLinks(res.linkNames)
        setSections(res.items)
      })
  },[])

  return (
    <div className="app">
          <Navbar/>
          <MenuRow links={links}/>
          <div className="menu-header-div">
            <h1>Menu</h1>
          </div>
          <div className="menu-section">
          {sections.map(section=>(
            <MenuSection key={section.id} section={section}/>
          ))} 
          </div>
          <OrderCard/>
          <FixedSelector/>     
    </div>
  )
}

export default App
