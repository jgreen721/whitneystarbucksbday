import React, {useEffect, useState} from 'react'
import "./FakeSelect.css"



const DropDownItem = ({msg,item,counter})=>{


   


    return(

        <div className={item.id == counter ? 'dropdown-item highlight' : 'dropdown-item'}>
            <h4>{item.name}</h4>
            {counter == 4 && item.id == 4 ?
            <div className={counter == 4 ? "add-suggestion-div slide-right" : "add-suggestion-div"}>
                <h4>{msg}</h4>
            </div> : ""}
        </div>
    )
}

const FakeSelect = ({toggleBday,showBday}) => {
    const items = [
        {id:1,name:"Morning Fuel",isHighlighted:false},
        {id:2,name:"Snacks for Disney",isHighlighted:false},
        {id:3,name:"Snacks for Legos",isHighlighted:false},
        {id:4,name:"None of these...",isHighlighted:false},
    ]
    const [counter,setCounter] = useState(1)
    const [msg,setMsg] = useState("")


    useEffect(()=>{
        setTimeout(()=>{
        let temp = counter;
        handleCounter(temp);
        },4500);
    },[])


    const handleCounter = (temp)=>{
        console.log("handleCounter()");
        if(temp < 5){
            setCounter(temp)
            setTimeout(()=>handleCounter(temp+1),1500);
        }
        else{
            let tempMsg=""
            startMsg(tempMsg)
        }
    }

    const startMsg = (tempMsg,counter=0)=>{
        let message = "birthday";
        console.log(tempMsg)
        if(tempMsg != "birthday"){
            tempMsg += message[counter];
            setMsg(tempMsg)
            setTimeout(()=>startMsg(tempMsg,counter+1),150);

        }
        else{
            toggleBday()
        }
    }
  return (
<div className="fake-select-div">
    <div className="select-occasion">
        <h4 onClick={handleCounter}>Select Occassion...</h4>
        <div className={showBday ? "drop-down hide" : "drop-down"}>
            {items.map(item=>(
                <DropDownItem msg={msg} counter={counter} key={item.id} item={item}/>
            ))}
          
        </div>
     
    </div>
    {/* {counter == 4 ?
            <div className="add-suggestion-div">
                <input className="form-div" type="text" value="happy birthday" />
            </div> : ""} */}
</div>
  )
}

export default FakeSelect