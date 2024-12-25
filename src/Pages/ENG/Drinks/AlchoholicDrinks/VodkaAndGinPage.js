import DrinkCard from "../../../../Components/DrinkCard.js"
import SavoyVodka from "../../../../Images/Drinks/AlchoholicDrinks/VodkaAndGin/SavoyVodka.jpeg"
import Finlandia from "../../../../Images/Drinks/AlchoholicDrinks/VodkaAndGin/Finlandia.jpeg"
import Beluga from "../../../../Images/Drinks/AlchoholicDrinks/VodkaAndGin/Beluga.jpeg"
import SavoyGin from "../../../../Images/Drinks/AlchoholicDrinks/VodkaAndGin/SavoyGin.jpeg"
import SavoyGinPink from "../../../../Images/Drinks/AlchoholicDrinks/VodkaAndGin/SavoyGinPink.jpeg"
import BickensGin from "../../../../Images/Drinks/AlchoholicDrinks/VodkaAndGin/BickensGin.jpeg"
function VodkaPage() {
    return (
      <div className="App">
        <div className="Drinks">
          <DrinkCard 
            title="Savoy Vodka" 
            price="6.00lv" 
            weight="50ml" 
            img={SavoyVodka}/>
          <DrinkCard 
            title="Finlandia" 
            price="9.00lv" 
            weight="50ml" 
            img={Finlandia}/>
          <DrinkCard 
            title="Beluga" 
            price="14.00lv" 
            weight="50ml" 
            img={Beluga}/>
          <DrinkCard 
            title="Savoy Gin" 
            price="6.00lv" 
            weight="50ml" 
            img={SavoyGin}/>
          <DrinkCard 
            title="Savoy Gin Pink" 
            price="6.00lv" 
            weight="50ml" 
            img={SavoyGinPink}/>
            <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default VodkaPage