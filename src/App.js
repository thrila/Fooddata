import axios from "axios";
import React, { useState } from "react";

function App() {
  const [foodDetails , setFoodDetails] = useState({})
  const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=rice&pageSize=6&api_key=${process.env.REACT_APP_FOOD_KEY}`;
              setInterval(() => {
                axios.get(URL)
              .then((res)=> {
                const result = res.data;
                console.log(result);
                setFoodDetails(result);
              })
              .catch((err)=> {
                console.log(err);
              })
              }, 3000);
  
  return (
    <div className="app">
      <div className="search">
        <input type="text" placeholder="Enter food ..." />
      </div>

      {foodDetails ? foodDetails.map((item)=> { <h1>{item.currentPage} </h1> }) : 'help'}


      {/* <div className="container">
        <div className="card">
          <div className="top">
            <div className="brand">
              <h1>Nelly foods</h1>
            </div>
            <div className="description">
              <p>
                this is the description for nelly's rice more more text and
                stuff
              </p>
            </div>
            <div className="food-catergory">
              <p>flovoured foods</p>
            </div>
          </div>
          <div className="buttom">
            <ul>
              <li>
                <p>Protein</p>
              </li>
              <li>
                <p>Carbs</p>
              </li>
              <li>
                <p>Fats</p>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
