import React from 'react'
import '../Venue.css'

import {useState} from 'react'

const Meals = () => {

    const [count , setCount] = useState(0);
    const [numPeople, setNumPeople] = useState(0);
    const handleCheckboxChange = (e, price) => {
        if (e.target.checked) {
          setCount((prevCount) => prevCount + price);
        } else {
          setCount((prevCount) => prevCount - price);
        }
      };
    return (
        <>
          <div className='bg-container1'></div>
          <div className='Content'>
            <div className='Start'>
                <h1 style={{display: "flex",justifyContent: "center",color: "white", backgroundColor:"black"}}>Meals Selection</h1>
                <div style={{display: "flex", flexDirection:"row", alignItems: "center", justifyContent: "center", marginTop:"10%"}}>
                    <p style={{fontWeight: "bold",fontSize: "150%", color: "black", marginRight:"2%"}}>Number of People</p>
                    <input style={{backgroundColor: "white",fontSize: "120%", color:"black"}} type="number" backholder="numPeople" onChange={(e) => setNumPeople(e.target.value)}/>
                </div>
                    <form style={{display: "flex", flexDirection:"row", alignItems: "center", justifyContent: "center", marginTop:"10%", color: "black", fontWeight: "bold", fontSize: "150%"}}>
                        <input type="checkbox" id="breakfast" name="fruit" value="breakfast" onChange={(e) => handleCheckboxChange(e, 50)}/>
                        <label style={{marginRight: "10%"}} for="breakfast">Breakfast : $50</label>
                        <input type="checkbox" id="hightea" name="fruit" value="hightea" onChange={(e) => handleCheckboxChange(e, 25)}/>
                        <label for="hightea">High Tea : $25</label>
                    </form>
                    <form style={{display: "flex", flexDirection:"row", alignItems: "center", justifyContent: "center", marginTop:"10%", color: "black", fontWeight: "bold", fontSize: "150%"}}>
                    <input type="checkbox" id="Lunch" name="fruit" value="Lunch" onChange={(e) => handleCheckboxChange(e, 65)}/>
                        <label style={{marginRight: "10%"}} for="Lunch">Lunch : $65</label>
                        <input type="checkbox" id="Diner" name="fruit" value="Diner" onChange={(e) => handleCheckboxChange(e, 70)}/>
                        <label for="Diner">Diner : $70</label>
                    </form>
                <h3 style={{display: "flex",justifyContent: "center",marginTop: "8%", fontSize: "200%", color: "black"}}>Total Cost : ${count * numPeople}</h3>
            </div>
          </div>
        </>
      )
}

export default Meals
