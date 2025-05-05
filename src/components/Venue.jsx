import React from 'react'
import '../Venue.css'
import cRoom from "../assets/conferenceroom.jpg"
import auditorium from "../assets/auditorium.avif"
import pRoom from "../assets/presentationroom.jpg"
import lmeetingRoom from "../assets/largemeetingroom.jpg"
import smeetingRoom from "../assets/smallmeetingroom.jpg"

import {useState} from 'react'




const Venue = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

  return (
    <>
      <div className='bg-container1'></div>
      <div className='Content'>
        <div className='Start'>
            <h1 style={{display: "flex",justifyContent: "center",color: "white", backgroundColor:"black"}}>Venue Room Selection</h1>
            <div className='roomOptions'>
                <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='conferenceRoom'>
                    <img src={cRoom} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                    <p style={{fontSize:"150%", textAlign: "center"}}>Conference Room<br/>Capacity : 15<br/>$1500</p>
                    <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                        <span onClick={() => setCount(c => Math.max(0, c - 1))} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                        <span>{count}</span>
                        <span onClick={() => setCount(c => c + 1)} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                    </p>
                </div>

                <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='auditoriumHall'>
                    <img src={auditorium} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                    <p style={{fontSize:"150%", textAlign: "center"}}>Auditorium Hall<br/>Capacity : 200<br/>$5500</p>
                    <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                        <span onClick={() => setCount1(c => Math.max(0, c - 1))} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                        <span>{count1}</span>
                        <span onClick={() => setCount1(c => c + 1)} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                    </p>
                </div>

                <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='presentationRoom'>
                    <img src={pRoom} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                    <p style={{fontSize:"150%", textAlign: "center"}}>Presentation Room<br/>Capacity : 50<br/>$3500</p>
                    <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                        <span onClick={() => setCount2(c => Math.max(0, c - 1))} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                        <span>{count2}</span>
                        <span onClick={() => setCount2(c => c + 1)} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                    </p>
                </div>

                <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='largeMeetingRoom'>
                    <img src={lmeetingRoom} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                    <p style={{fontSize:"150%", textAlign: "center"}}>Large Meeting Room<br/>Capacity : 10<br/>$1000</p>
                    <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                        <span onClick={() => setCount3(c => Math.max(0, c - 1))} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                        <span>{count3}</span>
                        <span onClick={() => setCount3(c => c + 1)} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                    </p>
                </div>

                <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='smallMeetingRoom'>
                    <img src={smeetingRoom} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                    <p style={{fontSize:"150%", textAlign: "center"}}>Small Meeting Room<br/>Capacity : 5<br/>$800</p>
                    <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                        <span onClick={() => setCount4(c => Math.max(0, c - 1))} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                        <span>{count4}</span>
                        <span onClick={() => setCount4(c => c + 1)} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                    </p>
                </div>

            </div>
            <h3 style={{display: "flex",justifyContent: "center",marginTop: "8%", fontSize: "200%", color: "black"}}>Total Cost : ${count * 1500 + count1 * 5500 + count2 * 3500 + count3 * 1000 + count4 * 800 }</h3>
        </div>
      </div>
    </>
  )
}

export default Venue
