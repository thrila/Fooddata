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
      { foodDetails && foodDetails.foods ? foodDetails.foods.map((food)=> {
        return(
          
        <div className="card">
          <div className="top">
            <div className="brand">
            { <h1>{food.brandOwner}</h1>}
            </div>
            <div className="description">
              
              {<p>{food.description}</p>}
            </div>
            <div className="food-catergory">
            {<p>{food.foodCategory}</p>}
              
            </div>
          </div>
          <div className="buttom">
          {food.foodNutrients.filter(nutrient => nutrient.nutrientId === 1003 || nutrient.nutrientId === 1005 || nutrient.nutrientId === 1004).map(nutrient => (
            <ul>
              <li>
              <p>{nutrient.nutrientName}: {nutrient.value}g </p>   
              </li>
            </ul>
          ))}
            
          </div>
        </div>
      
        );
      }) 
      
      : 
      
        <div className="card">
          <div className="top">
            <div className="brand">
            <h1>brandOwner</h1>
            </div>
            <div className="description">
            <p>description</p>
            </div>
            <div className="food-catergory">
            <p>foodCategory</p>  
            </div>
          </div>
          <div className="buttom">
            <ul>
              <li>
              <p>Protein: 00g</p>
              </li>
              <li>
                <p>Carbs: 00g</p>
              </li>
              <li>
                <p>Fats: 00g</p>
              </li>
            </ul>
          </div>
        </div>
      }
      </div>
    </div>
  );
}

export default App;
