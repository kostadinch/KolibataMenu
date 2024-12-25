import DrinkCard from "../../../../Components/DrinkCard.js"
import Tatratea22 from "../../../../Images/Drinks/AlchoholicDrinks/Tatratea/Tatratea22.jpeg"
import Tatratea32 from "../../../../Images/Drinks/AlchoholicDrinks/Tatratea/Tatratea32.jpeg"
import Tatratea42 from "../../../../Images/Drinks/AlchoholicDrinks/Tatratea/Tatratea42.jpeg"
import Tatratea52 from "../../../../Images/Drinks/AlchoholicDrinks/Tatratea/Tatratea52.jpeg"
import Tatratea62 from "../../../../Images/Drinks/AlchoholicDrinks/Tatratea/Tatratea62.jpeg"
import Tatratea72 from "../../../../Images/Drinks/AlchoholicDrinks/Tatratea/Tatratea72.jpeg"
function RakiaPage() {
    return (
      <div className="App">
        <div className="Drinks"> 
          <DrinkCard 
            title="Татра Чай Кокосом 22%" 
            price="7.00лв" 
            weight="20ml" 
            img={Tatratea22}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Татра Чай Цитрусовые 32%" 
            price="7.00лв" 
            weight="20ml" 
            img={Tatratea32}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Татра Чай Персик 42%" 
            price="7.00лв" 
            weight="20ml" 
            img={Tatratea42}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Татра Чай Оригинал 52%"
            price="7.00лв" 
            weight="20ml" 
            img={Tatratea52}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Татра Чай Лесные Фрукты 62%"
            price="7.00лв" 
            weight="20ml" 
            img={Tatratea62}/>
          <DrinkCard 
            title="Татра Чай Преступник 72%"
            price="7.00лв" 
            weight="20ml" 
            img={Tatratea72}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default RakiaPage