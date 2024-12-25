import DrinkCard from "../../../../Components/DrinkCard.js"
import Coffee from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Coffee.GIF"
import HotChocolateWithMilk from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/HotChocolateWithMilk.GIF"
import Mochaccino from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Mochaccino.GIF"
import Tea from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Tea.GIF"
import HotChocolate from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/HotChocolate.GIF"
import CoffeeWithMilk from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/CoffeeWithMilk.GIF"
import Kapuchino from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Kapuchino.GIF"


function HotDrinksPage() {
    return (
      <div className="App">
        <div className="Drinks">

          <DrinkCard 
            title="Кофе" 
            price="5.00лв" 
            weight="60ml" 
            img={Coffee}/>
          <DrinkCard 
            title="Кофе с Молоком" 
            price="6.00лв" 
            weight="250ml" 
            img={CoffeeWithMilk}/>
          <DrinkCard 
            title="Капучино" 
            price="8.00лв" 
            weight="250ml" 
            img={Kapuchino}/>
          <DrinkCard 
            title="Мокаччино"
            price="8.00лв" 
            weight="250ml" 
            img={Mochaccino}/>
          <DrinkCard 
            title="Горячий Шоколад"
            price="8.00лв" 
            weight="250ml" 
            img={HotChocolate}/>
          <DrinkCard 
            title="Горячий Шоколад с Молоком"
            price="8.00лв" 
            weight="250ml" 
            img={HotChocolateWithMilk}/>
          <DrinkCard 
            title="Чай" 
            price="5.00лв" 
            weight="250ml" 
            img={Tea}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default HotDrinksPage