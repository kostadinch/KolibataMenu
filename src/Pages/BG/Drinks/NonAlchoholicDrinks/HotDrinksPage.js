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
            title="Кафе" 
            price="5.00лв" 
            weight="60ml" 
            img={Coffee}/>
          <DrinkCard 
            title="Кафе с Мляко" 
            price="6.00лв" 
            weight="250ml" 
            img={CoffeeWithMilk}/>
          <DrinkCard 
            title="Капучино" 
            price="6.00лв" 
            weight="250ml" 
            img={Kapuchino}/>
          <DrinkCard 
            title="Мокачино"
            price="6.00лв" 
            weight="250ml" 
            img={Mochaccino}/>
          <DrinkCard 
            title="Топъл Шоколад"
            price="6.00лв" 
            weight="250ml" 
            img={HotChocolate}/>
          <DrinkCard 
            title="Мляко с Какао"
            price="6.00лв" 
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