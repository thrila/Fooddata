import axios from "axios";
import React, { useState } from "react";



function App() {
  const [food, setFood] = useState('rice');
  const [foodDetails , setFoodDetails] = useState({})
  const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&pageSize=6&api_key=${process.env.REACT_APP_FOOD_KEY}`; 
  const handleSearch = (event)=> {
    if(event.key === "Enter"){
      axios.get(URL)
              .then((res)=> {
                const result = res.data;
                console.log(result);
                setFoodDetails(result);
              })
              .catch((err)=> {
                console.log(err);
              })
    }
    console.log(foodDetails);
  }
  
  return (
    <div className="app">
      <div className="search">
     
        <input type="text"
        onChange={(event)=> setFood(event.target.value)}
         placeholder="Enter food ..."
         onKeyDown={handleSearch}
         value={food} />
      </div>

      <div className="container">
        <div className="card">
          <div className="top">
            <div className="brand">
            {/* {foodDetails.foods[0] ?  <h1>{foodDetails.foods[0].brandOwner}</h1> : <h1>hello</h1>} */}
            </div>
            <div className="description">
              
              {/* {foodDetails.foods[0] ? <p>{foodDetails.foods[0].description}</p> : <p> Description</p>} */}
            </div>
            <div className="food-catergory">
            {/* {foodDetails.foods[0] ? <p>{foodDetails.foods[0].foodCategory}</p> : <p>flovoured foods</p>} */}
              
            </div>
          </div>
          <div className="buttom">
            <ul>
              <li>
              {/* {foodDetails.foods[0].foodNutrients ? <p>Protein  {foodDetails.foods[0].foodNutrients[6].value}</p> : <p>Protein:  00g </p>} */}
                
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
      </div>
    </div>
  );
}

export default App;
