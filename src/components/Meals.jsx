import React, { useState } from 'react';
import '../Venue.css';

const Meals = ({ items, setItems }) => {
  const [totalCost, setTotalCost] = useState(0);
  const [numPeople, setNumPeople] = useState(0);

  const handleCheckboxChange = (e, index) => {
    const updatedItems = [...items];
    const item = updatedItems[index];
    const costChange = item.unitCost * numPeople;

    if (e.target.checked) {
      item.quantity = 1;
      item.totalCost = costChange;
    } else {
      item.quantity = 0;
      item.totalCost = 0;
    }
    item.quantity = numPeople;
    const newTotal = updatedItems.reduce((acc, item) => acc + item.totalCost, 0);

    setItems(updatedItems);
    setTotalCost(newTotal);
  };

  const handleNumPeopleChange = (e) => {
    const newNum = parseInt(e.target.value) || 0;
    setNumPeople(newNum);

    // Recalculate all totals based on the new number of people
    const updatedItems = items.map((item) => {
      if (item.quantity > 0) {
        item.totalCost = item.unitCost * newNum;
      }
      return item;
    });

    const newTotal = updatedItems.reduce((acc, item) => acc + item.totalCost, 0);
    setItems([...updatedItems]);
    setTotalCost(newTotal);
  };

  return (
    <>
      <div id="Meals">
          <div className='bg-container1'></div>
          <div className='Content'>
            <h1 style={{ display: 'flex', justifyContent: 'center', color: 'white', backgroundColor: 'black' }}>
              Meals Selection
            </h1>
            <div className='Start'>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
                <p style={{ fontWeight: 'bold', fontSize: '150%', color: 'black', marginRight: '2%' }}>Number of People</p>
                <input
                  style={{ backgroundColor: 'white', fontSize: '120%', color: 'black' }}
                  type='number'
                  placeholder='numPeople'
                  onChange={handleNumPeopleChange}
                />
              </div>

              {/* Checkboxes */}
              <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '10%', color: 'black', fontWeight: 'bold', fontSize: '150%' }}>
                {[10, 11, 12, 13].map((index) => (
                  <div key={index} style={{ margin: '10px' }}>
                    <input
                      type='checkbox'
                      id={`meal-${index}`}
                      onChange={(e) => handleCheckboxChange(e, index)}
                    />
                    <label htmlFor={`meal-${index}`} style={{ marginLeft: '10px' }}>
                      {items[index].name} : ${items[index].unitCost}
                    </label>
                  </div>
                  
                ))}
              </form>

              <h3 style={{ display: 'flex', justifyContent: 'center', marginTop: '8%', fontSize: '200%', color: 'black' }}>
                Total Cost: ${totalCost}
              </h3>
            </div>
          </div>
      </div>
    </>
  );
};

export default Meals;
