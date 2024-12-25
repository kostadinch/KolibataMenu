import DrinkCard from "../../../../Components/DrinkCard.js"
import Cappy from "../../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/Cappy.jpeg"
import CocaCola from "../../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/CocaCola.jpeg"
import Fanta from "../../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/Fanta.jpeg"
import Sprite from "../../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/Sprite.jpeg"
import Fuzetea from "../../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/Fuzetea.jpeg"
import MineralWater from "../../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/MineralWater.jpeg"
import Redbull from "../../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/Redbull.jpeg"
import Schweppes from "../../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/Schweppes.jpeg"
import Monster from "../../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/Monster.jpeg"

function HotDrinksPage() {
    return (
      <div className="App">
        <div className="Drinks">

          <DrinkCard 
            title="Кока-Кола" 
            price="8.00лв" 
            weight="500ml" 
            img={CocaCola}/>
          <DrinkCard 
            title="Фанта" 
            price="8.00лв" 
            weight="500ml" 
            img={Fanta}/>
          <DrinkCard 
            title="Спрайт" 
            price="8.00лв" 
            weight="500ml" 
            img={Sprite}/>
          <DrinkCard 
            title="Швепс Тоник"
            price="8.00лв" 
            weight="500ml" 
            img={Schweppes}/>
          <DrinkCard 
            title="Швепс Сода"
            price="5.00лв" 
            weight="500ml" 
            img={Schweppes}/>
          <DrinkCard 
            title="Минеральная вода Банкя" 
            price="5.00лв" 
            weight="500ml" 
            img={MineralWater}/>
          <DrinkCard 
            title="Кэппи" 
            price="7.00лв" 
            weight="250ml" 
            img={Cappy}/>
          <DrinkCard 
            title="Фузетеа" 
            price="8.00лв" 
            weight="500ml" 
            img={Fuzetea}/>
          <DrinkCard 
            title="Ред Бул" 
            price="10.00лв" 
            weight="250ml" 
            img={Redbull}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default HotDrinksPage