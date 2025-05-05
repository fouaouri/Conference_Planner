import React from 'react'
import '../Venue.css'

import {useState} from 'react'




const Venue = ({ items, setItems }) => {
        const [totalCost, setTotalCost] = useState(0);
        const handleQuantityChange = (index, action) => {
        const updatedItems = [...items];

        let updatedQuantity = updatedItems[index].quantity;
      
        if (action === "increment") {
          updatedQuantity++;
          
        } else if (action === "decrement" && updatedQuantity > 0) {
          updatedQuantity--;
        }
      
        updatedItems[index].quantity = updatedQuantity;
        updatedItems[index].totalCost = updatedItems[index].unitCost * updatedQuantity;

        const newTotalCost = updatedItems.reduce((acc, item) => acc + item.totalCost, 0);

        setItems(updatedItems);
        setTotalCost(newTotalCost);
      };
  return (
    <>
        <div id="Venue">
            <div className='bg-container1'></div>
            <div className='Content'>
                <h1 style={{display: "flex",justifyContent: "center",color: "white", backgroundColor:"black"}}>Venue Room Selection</h1>
                <div className='Start' style={{display: "flex",flexDirection: "row", gap: "5%", justifyContent: "center"}}>
                    {items.slice(0, 5).map((item, index) => (
                        <div key={index}>

                            <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='conferenceRoom'>
                                <img src={item.profilePath} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                                <p style={{fontSize:"150%", textAlign: "center"}}>{item.name}<br/>Capacity : {item.capacity} <br/>${item.unitCost}</p>
                                <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                                    <span onClick={() => handleQuantityChange(index, "decrement")} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                                    <span>{item.quantity}</span>
                                    <span onClick={() => handleQuantityChange(index, "increment")} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                                </p>
                            </div>
                        </div>
                        
                    ))}
                </div>
                <h3 style={{display: "flex",justifyContent: "center",marginTop: "8%", fontSize: "200%", color: "black"}}>Total Cost : ${totalCost}</h3>
            </div>
        </div>
    </>
  )
}

export default Venue
