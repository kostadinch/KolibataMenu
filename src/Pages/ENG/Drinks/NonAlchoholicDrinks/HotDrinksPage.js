import DrinkCard from "../../../../Components/DrinkCard.js"
import HotChocolateWithMilk from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/HotChocolateWithMilk.GIF"
import Mochaccino from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Mochaccino.GIF"
import Tea from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Tea.GIF"
import HotChocolate from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/HotChocolate.GIF"
import Coffee from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Coffee.GIF"
import CoffeeWithMilk from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/CoffeeWithMilk.GIF"
import Kapuchino from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Kapuchino.GIF"


function HotDrinksPage() {
    return (
      <div className="App">
        <div className="Drinks">

          <DrinkCard 
            title="Coffee" 
            price="5.00lv" 
            weight="60ml" 
            img={Coffee}/>
          <DrinkCard 
            title="Coffee With Milk" 
            price="6.00lv" 
            weight="250ml" 
            img={CoffeeWithMilk}/>
          <DrinkCard 
            title="Cappuccino" 
            price="8.00lv" 
            weight="250ml" 
            img={Kapuchino}/>
          <DrinkCard 
            title="Mochaccino"
            price="8.00lv" 
            weight="250ml" 
            img={Mochaccino}/>
          <DrinkCard 
            title="Hot Chocolate"
            price="8.00lv" 
            weight="250ml" 
            img={HotChocolate}/>
          <DrinkCard 
            title="Hot Chocolate With Milk"
            price="8.00lv" 
            weight="250ml" 
            img={HotChocolateWithMilk}/>
          <DrinkCard 
            title="Tea" 
            price="5.00lv" 
            weight="250ml" 
            img={Tea}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default HotDrinksPage