import DrinkCard from "../../../../Components/DrinkCard.js"
import MulledWine from "../../../../Images/Drinks/AlchoholicDrinks/HotDrinksWithAlchohol/MulledWine.GIF"
import Tea from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Tea.GIF"
import HotChocolate from "../../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/HotChocolate.GIF"

function HotDrinksWithAlchoholPage() {
    return (
      <div className="App">
        <div className="Drinks">
          <DrinkCard 
            title="Греяно Вино" 
            price="6.00лв" 
            weight="250ml" 
            img={MulledWine}/>
          <DrinkCard 
            title="Домашен Чай с Татра Чай" 
            price="8.00лв" 
            weight="240ml" 
            img={Tea}/>
          <DrinkCard 
            title="Чай с Ром" 
            price="7.00лв" 
            weight="250ml" 
            img={Tea}/>
          <DrinkCard 
            title="Чай с Метакса"
            price="8.00лв" 
            weight="250ml" 
            img={Tea}/>
          <DrinkCard 
            title="Топъл Шоколад с Ром"
            price="7.00лв" 
            weight="250ml" 
            img={HotChocolate}/>
          <DrinkCard 
            title="Топъл Шоколад с Бейлиз" 
            price="10.00лв" 
            weight="250ml" 
            img={HotChocolate}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default HotDrinksWithAlchoholPage