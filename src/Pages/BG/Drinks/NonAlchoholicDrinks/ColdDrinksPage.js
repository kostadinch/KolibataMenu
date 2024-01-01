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
            price="6.00лв" 
            weight="500ml" 
            img={CocaCola}/>
          <DrinkCard 
            title="Фанта" 
            price="6.00лв" 
            weight="500ml" 
            img={Fanta}/>
          <DrinkCard 
            title="Спрайт" 
            price="6.00лв" 
            weight="500ml" 
            img={Sprite}/>
          <DrinkCard 
            title="Швепс Тоник"
            price="6.00лв" 
            weight="500ml" 
            img={Schweppes}/>
          <DrinkCard 
            title="Швепс Сода"
            price="4.00лв" 
            weight="500ml" 
            img={Schweppes}/>
          <DrinkCard 
            title="Минерална Вода Банкя" 
            price="3.00лв" 
            weight="500ml" 
            img={MineralWater}/>
          <DrinkCard 
            title="Капи" 
            price="5.00лв" 
            weight="250ml" 
            img={Cappy}/>
          <DrinkCard 
            title="Студен Чай Fuzetea" 
            price="6.00лв" 
            weight="500ml" 
            img={Fuzetea}/>
          <DrinkCard 
            title="Редбул" 
            price="10.00лв" 
            weight="250ml" 
            img={Redbull}/>
          <DrinkCard 
            title="Монстер" 
            price="10.00лв" 
            weight="500ml" 
            img={Monster}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default HotDrinksPage