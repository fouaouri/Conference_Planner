import { useState } from 'react'
import './App.css';
import Meals from "./components/Meals";
import Venue from "./components/Venue";
import AddOns from "./components/addOns";


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
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
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
				<table style={{ position: "absolute", width: '100%', textAlign: 'center', marginTop: "5%", backgroundColor: "white", color: "black", left: "30%" }}>

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Unit Cost</th>
                    <th>Quantity</th>
                    <th>Total Cost</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Dynamically populate this with table rows */}
                  {Object.keys(selections).map((item) => {
                    if (selections[item].quantity > 0) {
                      return (
                        <tr key={item}>
                          <td>{item.charAt(0).toUpperCase() + item.slice(1)}</td>
                          <td>${selections[item].price}</td>
                          <td>{selections[item].quantity}</td>
                          <td>${calculateSubtotal(item)}</td>
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
            <Venue />
            <AddOns />
            <Meals />
          </>
          )}
          
      </div>
    ) : (
              <StartPage setShowMainApp={setShowMainApp} />
        )

  ); 
}

export default App
