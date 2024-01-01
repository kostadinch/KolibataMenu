import DrinkCard from "../../../../Components/DrinkCard.js"
import MulledWine from "../../../../Images/Drinks/AlchoholicDrinks/HotDrinksWithAlchohol/MulledWine.GIF"
import Tea from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Tea.GIF"
import HotChocolate from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/HotChocolate.GIF"

function HotDrinksWithAlchoholPage() {
    return (
      <div className="App">
        <div className="Drinks">
          <DrinkCard 
            title="Mulled Wine" 
            price="6.00лв" 
            weight="250ml" 
            img={MulledWine}/>
          <DrinkCard 
            title="Homemade Tea With Tatratea" 
            price="8.00лв" 
            weight="240ml" 
            img={Tea}/>
          <DrinkCard 
            title="Tea With Rum" 
            price="7.00лв" 
            weight="250ml" 
            img={Tea}/>
          <DrinkCard 
            title="Tea With Metaxa"
            price="8.00лв" 
            weight="250ml" 
            img={Tea}/>
          <DrinkCard 
            title="Hot Chocolate With Rum"
            price="7.00лв" 
            weight="250ml" 
            img={HotChocolate}/>
          <DrinkCard 
            title="Hot Chocolate With Baileys" 
            price="10.00лв" 
            weight="250ml" 
            img={HotChocolate}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default HotDrinksWithAlchoholPage