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
            title="Coca-Cola" 
            price="8.00lv" 
            weight="500ml" 
            img={CocaCola}/>
          <DrinkCard 
            title="Fanta" 
            price="8.00lv" 
            weight="500ml" 
            img={Fanta}/>
          <DrinkCard 
            title="Sprite" 
            price="8.00lv" 
            weight="500ml" 
            img={Sprite}/>
          <DrinkCard 
            title="Schweppes Tonic"
            price="8.00lv" 
            weight="500ml" 
            img={Schweppes}/>
          <DrinkCard 
            title="Schweppes Soda"
            price="5.00lv" 
            weight="500ml" 
            img={Schweppes}/>
          <DrinkCard 
            title="Mineral Water Bankya" 
            price="5.00lv" 
            weight="500ml" 
            img={MineralWater}/>
          <DrinkCard 
            title="Cappy" 
            price="7.00lv" 
            weight="250ml" 
            img={Cappy}/>
          <DrinkCard 
            title="Fuzetea" 
            price="8.00lv" 
            weight="500ml" 
            img={Fuzetea}/>
          <DrinkCard 
            title="Red Bull" 
            price="10.00lv" 
            weight="250ml" 
            img={Redbull}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default HotDrinksPage