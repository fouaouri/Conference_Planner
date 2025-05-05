import React from 'react'
import '../Venue.css'
import projector from "../assets/projector.webp"
import speaker from "../assets/speaker.jpg"
import microphone from "../assets/microphone.webp"
import whiteboard from "../assets/whiteboard.avif"
import Signage from "../assets/Signage.jpg"

import {useState} from 'react'
const addOns = () => {
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
                <h1 style={{display: "flex",justifyContent: "center",color: "white", backgroundColor:"black"}}>Add-ons Selection</h1>
                <div className='roomOptions'>
                    <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='conferenceRoom'>
                        <img src={projector} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                        <p style={{fontSize:"150%", textAlign: "center"}}>Projectors<br/>$200</p>
                        <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                            <span onClick={() => setCount(c => Math.max(0, c - 1))} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                            <span>{count}</span>
                            <span onClick={() => setCount(c => c + 1)} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                        </p>    
                    </div>
    
                    <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='speakerHall'>
                        <img src={speaker} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                        <p style={{fontSize:"150%", textAlign: "center"}}>speaker<br/>$35</p>
                        <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                            <span onClick={() => setCount1(c => Math.max(0, c - 1))} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                            <span>{count1}</span>
                            <span onClick={() => setCount1(c => c + 1)} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                        </p>
                    </div>
    
                    <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='presentationRoom'>
                        <img src={microphone} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                        <p style={{fontSize:"150%", textAlign: "center"}}>Microphones<br/>$45</p>
                        <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                            <span onClick={() => setCount2(c => Math.max(0, c - 1))} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                            <span>{count2}</span>
                            <span onClick={() => setCount2(c => c + 1)} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                        </p>
                    </div>
    
                    <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='largeMeetingRoom'>
                        <img src={whiteboard} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                        <p style={{fontSize:"150%", textAlign: "center"}}>Whiteboards<br/>$80</p>
                        <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                            <span onClick={() => setCount3(c => Math.max(0, c - 1))} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                            <span>{count3}</span>
                            <span onClick={() => setCount3(c => c + 1)} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                        </p>
                    </div>
    
                    <div style={{display: "flex",flexDirection: "column",width: "250px", backgroundColor: "grey", borderRadius: "10px", padding: "1rem", gap: "1rem", alignItems: "center"}} className='smallMeetingRoom'>
                        <img src={Signage} style={{ width: "220px",height: "150px", borderRadius: "10px" }} alt="Conference Room"/>
                        <p style={{fontSize:"150%", textAlign: "center"}}>Signage<br/>$80</p>
                        <p style={{display:"flex", flexDirection:"row", gap: "2rem", alignItems: "center", fontSize:"150%"}}>
                            <span onClick={() => setCount4(c => Math.max(0, c - 1))} style={{ backgroundColor: "green", padding: "0.25rem 0.5rem", marginRight: "0.5rem", borderRadius: "5px", cursor: "pointer" }}>-</span>
                            <span>{count4}</span>
                            <span onClick={() => setCount4(c => c + 1)} style={{ backgroundColor: "blue", padding: "0.25rem 0.5rem", borderRadius: "5px", cursor: "pointer" }}>+</span>
                        </p>
                    </div>
    
                </div>
                <h3 style={{display: "flex",justifyContent: "center",marginTop: "8%", fontSize: "200%", color: "black"}}>Total Cost : ${count * 200 + count1 * 35 + count2 * 45 + count3 * 80 + count4 * 80}</h3>
            </div>
          </div>
        </>
      )
}

export default addOns
