import { useState } from 'react'
import './App.css';
import Meals from "./components/Meals";
import Venue from "./components/Venue";
import AddOns from "./components/addOns";
import cRoom from "./assets/conferenceroom.jpg"
import auditorium from "./assets/auditorium.avif"
import pRoom from "./assets/presentationroom.jpg"
import lmeetingRoom from "./assets/largemeetingroom.jpg"
import smeetingRoom from "./assets/smallmeetingroom.jpg"
import projector from "./assets/projector.webp"
import speaker from "./assets/speaker.jpg"
import microphone from "./assets/microphone.webp"
import whiteboard from "./assets/whiteboard.avif"
import Signage from "./assets/Signage.jpg"
function StartPage({ setShowMainApp }){
  
  
  return (
    <>
      <div className='bg-container'></div>
      <div className="content-container">
        <div style={{textAlign: "center", maxWidth: "400px", marginRight: "5%", fontSize: "130%" }}>
          <h3>
            Conference Expence Planner
          </h3>
          <p>
            Plen your next major event with us !
          </p>
          <button onClick={() => setShowMainApp(true)}>
            Get Started
          </button>
        </div>
        <div style={{textAlign: "center", maxWidth: "700px", marginLeft: "5%", fontSize: "130%"}}>
        <p>
            Welcome to <strong>ConPlanner</strong>, your trusted partner in seamless conference planning.
            We specialize in managing every detail, from budgeting to expense tracking.  
            Our platform ensures that your event stays within budget and runs smoothly.  
            Whether it's a corporate meeting, seminar, or large-scale conference,  
            we provide the tools to simplify financial planning and decision-making.  
            Track venue costs, catering, travel, and all other expenses effortlessly.  
            With real-time insights, you can optimize spending and avoid surprises.  
            Collaborate with your team and streamline the entire planning process.  
            Generate detailed financial reports to enhance future event strategies.  
            Let us handle the numbers so you can focus on delivering a great event.  
            Plan smarter, spend better, and create memorable conferences with us!  
          </p>
        </div>
      </div>
    </>
  );
}

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [showMainApp, setShowMainApp] = useState(false);
  const [selections, setSelections] = useState({
    breakfast: { price: 50, quantity: 0 },
    hightea: { price: 25, quantity: 0 },
    lunch: { price: 65, quantity: 0 },
    diner: { price: 70, quantity: 0 },
  });
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const scrollToSection = (sectionName) => {
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [items, setItems] = useState([
    { name: "Conference Room", unitCost: 1500, capacity:15,quantity: 0, totalCost: 0, profilePath: cRoom },
    { name: "Auditorium Hall", unitCost: 5500, capacity:200, quantity: 0, totalCost: 0, profilePath: auditorium},
    { name: "Presentation Room", unitCost: 3500, capacity:50, quantity: 0, totalCost: 0, profilePath: pRoom },
    { name: "Large Meeting Room", unitCost: 1000, capacity:10, quantity: 0, totalCost: 0, profilePath: lmeetingRoom },
    { name: "Small Meeting Room", unitCost: 800, capacity:5, quantity: 0, totalCost: 0, profilePath: smeetingRoom },
    { name: "Projectors", unitCost: 200, quantity: 0, totalCost: 0, profilePath: projector },
    { name: "speaker", unitCost: 35, quantity: 0, totalCost: 0, profilePath: speaker },
    { name: "Microphones", unitCost: 45, quantity: 0, totalCost: 0, profilePath: microphone },
    { name: "Whiteboards", unitCost: 80, quantity: 0, totalCost: 0, profilePath: whiteboard },
    { name: "Signage", unitCost: 80, quantity: 0, totalCost: 0, profilePath: Signage },
    { name: "Breakfast", unitCost: 50, quantity: 0, totalCost: 0, profilePath: "../assets/conferenceroom.jpg" },
    { name: "High Tea", unitCost: 25, quantity: 0, totalCost: 0, profilePath: "../assets/conferenceroom.jpg" },
    { name: "Lunch", unitCost: 65, quantity: 0, totalCost: 0, profilePath: "../assets/conferenceroom.jpg" },
    { name: "Diner", unitCost: 70, quantity: 0, totalCost: 0, profilePath: "../assets/conferenceroom.jpg" }
  ]);
  return(
    showMainApp ? (
      <div className="App">
        <nav className="navbar">
          <h1 style={{color: "yellow", fontSize: "200%", marginLeft: "1%"}}>Conference Expence Planner</h1>
          <div className='buttons'>
            <button id="Venue" style={{fontSize: "120%"}} onClick={() => scrollToSection("Venue")}>Venue</button>
            <button id="AddOns" style={{fontSize: "120%"}} onClick={() => scrollToSection("AddOns")}>AddOns</button>
            <button id="Meals" style={{fontSize: "120%"}} onClick={() => scrollToSection("Meals")}>Meals</button>
          </div>
          <button style={{marginLeft: "28%", backgroundColor: "yellow", color: "black", border: 'none', cursor: 'pointer', padding: '10px 20px',}} onClick={toggleDetails}>Show Details</button>

        </nav>

          {/* Popup for Showing Details */}
          {showDetails ? (
            <div className='popup'>
              <div className='popup-content'>
                <h2 style={{ textAlign: 'center' }}>TOTAL COST FOR THE EVENT</h2>
                <h2 style={{ textAlign: 'center' }}>$</h2>
				<table style={{ position: "absolute", width: '40%', textAlign: 'center', marginTop: "7%", backgroundColor: "white", color: "black", left: "30%" }}>

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Unit Cost</th>
                    <th>Quantity</th>
                    <th>Total Cost</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item, index) => {
                    if (item.quantity > 0) {
                      return (
                        <tr style={{fontSize: "120%"}} key={index}>
                          <td>{item.name}</td>
                          <td>${item.unitCost}</td>
                          <td>{item.quantity}</td>
                          <td>${item.totalCost}</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
                
                </table>
                <button
                  onClick={toggleDetails}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '10px',
                    fontSize: '100%',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '20px',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
          <>
            <Venue items={items} setItems={setItems} />
            <AddOns  items={items} setItems={setItems} />
            <Meals  items={items} setItems={setItems} />
          </>
          )}
          
      </div>
    ) : (
              <StartPage setShowMainApp={setShowMainApp} />
        )

  ); 
}

export default App
