import React from 'react'
import BdayModal from './BdayModal'
import "./OrderCard.css"

const OrderCard = () => {
    const order={
         orderFor:[
             {id:1,name:"Colin"},
             {id:2,name:"Whitney"},
             {id:3,name:"Owen"},
             {id:4,name:"Maeve"},
         ],
         foodOrder:[
             {id:1,name:"Berry Trio Parfait",price:5.75,quantity:2,image:"https://globalassets.starbucks.com/digitalassets/products/food/BerryTrioParfait.jpg?impolicy=1by1_tight_288"},
             {id:2,name:"Ham & Swiss on Baguette",price:5.75,quantity:1,image:"https://globalassets.starbucks.com/digitalassets/products/food/SBX20221006_HamSwissOnBaguette.jpg?impolicy=1by1_tight_288"},
             {id:3,name:"Iced Brown Sugar Oatmilk Shaken Espresso",price:4.95,quantity:2,image:"https://globalassets.starbucks.com/digitalassets/products/bev/SBX20201011_IcedBrownSugarOatmilkShakenEspresso.jpg?impolicy=1by1_tight_288"},
             {id:4,name:"Iced Lavender Oatmilk Latte",price:5.75,quantity:2,image:"https://globalassets.starbucks.com/digitalassets/products/bev/IcedLavenderOatmilkLatte.jpg?impolicy=1by1_tight_288"},
             {id:5,name:"Orange Cream Cake Pop",price:2.75,quantity:1,image:"https://globalassets.starbucks.com/digitalassets/products/food/OrangeCreamCakePop.jpg?impolicy=1by1_tight_288"},
             {id:6,name:"Chocolate Cake Pop",price:2.75,quantity:1,image:"https://globalassets.starbucks.com/digitalassets/products/food/SBX20181129_ChocolateCakePop.jpg?impolicy=1by1_tight_288"},
         ]
        }
     
     
    
  return (
    <div className="order-card-overlay">
        <div className="order-card">
            {/* <div className="order-card-content"> */}
            <h5>Order for:</h5>
            {order.orderFor.map((person,idx)=>(
                <span key={person.id}>{person.name}{idx < order.orderFor.length-1 && ","} </span>
            ))}
            <table>
            <thead>
                <tr>
                <th></th>
                 <th>Name:</th>
                 <th>Qty:</th>
                 <th>Price:</th>
                 <th>Total:</th>
                </tr>
            </thead>
            {/* <ul className="order-items"> */}
                <tbody className="order-items">
                {order.foodOrder.map(foodItem=>(
                    // <li className="food-order-item">
                    //     <small>{foodItem.name.length < 20 ? foodItem.name : foodItem.name.slice(0,15) + "..."} </small>
                    //     <small>{foodItem.quantity} </small>
                    //     <small>{foodItem.price} </small>
                    //     <small>{(parseFloat(foodItem.price) * parseFloat(foodItem.quantity)).toFixed(2)}</small>
                    // </li>
                    <tr key={foodItem.id}>
                        <td>
                        <div className="food-img-div"><img src={foodItem.image} alt="img"/></div>
                        </td>
                        <td>{foodItem.name.length < 20 ? foodItem.name : foodItem.name.slice(0,15) + "..."}</td>
                        <td>{foodItem.quantity}</td>
                        <td>{foodItem.price}</td>
                        <td>{(parseFloat(foodItem.price) * parseFloat(foodItem.quantity)).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            {/* </ul> */}
            </table>
            <h4>Total:{order.foodOrder.reduce((total, item) => total + (parseFloat(item.price) * parseInt(item.quantity)), 0)}</h4>
            <BdayModal/>

            </div>

        {/* </div> */}
    </div>
  )
}

export default OrderCard