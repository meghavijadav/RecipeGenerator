import './App.css';
import { useState } from 'react';
import Axios from "axios";
import Recipetile from './components/Recipetile';

function App() {

  const YOUR_APP_ID = "0321e27d";
  const YOUR_APP_KEY = "646918b513b25dd9a7e1dfc18d7a552e";

  const [query, setQuery] = useState("");
  //Initial state will be empty
  const [healthLabel,setHealthLabel] = useState("vegan");
  const [recipes, setRecipes] = useState([]);


  const url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  
  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    //Prevents the App from reloading
    getRecipeInfo();
  }

  return <div className="app">
    <h1 onClick={getRecipeInfo}>
      <u>FOOD RECIPE FINDER</u>🍴🥘
    </h1>
    <form action="" className="app__searchForm" onSubmit={onSubmit}>
    <div className="app__searchForm">
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input"
          value={query}
          onChange={(e) =>{setQuery(e.target.value)}}
        />

      
    <select className="app__healthLabels">
      {/* Option Vegan   */}
      <option
           value="vegan"
            onClick={() => {
              setHealthLabel("vegan");
            }}
        >    
        vegan
      </option>  

      {/* Option vegetarian */}
      <option
         value="vegetarian"
          onClick={() => {
            setHealthLabel("vegetarian");
          }}
      >
        vegetarian      
      </option>

      {/* Option Low sugar */}
      <option
        value="low-sugar"
          onClick={() => {
            setHealthLabel("low-sugar");
          }}
      >
        low-sugar
      </option>      
      
      {/* Option Dairy free */}
      <option
        value="dairy-free"
          onClick={() => {
            setHealthLabel("dairy-free");
          }}
      >
        dairy-free
      </option>      
      
      {/* option immuno-supportive  */}
      
      <option
        value=" immuno-supportive "
          onClick={() => {
            setHealthLabel(" immuno-supportive ");
          }}
      >
        immuno-supportive
      </option>

      {/* Option wheat free       */}

      <option
        value="wheat-free"
          onClick={() => {
            setHealthLabel("wheat-free");
          }}
      >
        wheat-free
      </option>      
    </select>
      <input type="submit" value="Get Recipe" className="app__submit" />
    </div> 
    </form>

    <div className='app__recipes'>
      {recipes.map((recipe) =>{
        return <Recipetile recipe={recipe}/>
      })}
    </div>
  </div>;
}

export default App;
