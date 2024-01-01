import DrinkCard from "../../../../../Components/DrinkCard.js"
import LePhographeRed from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/RedWine/LePhographeRed.jpeg"
import Cycle from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/Cycle.jpeg"

function RedWinePage() {
    return (
      <div className="App">
        <div className="Drinks">
          <div style={{marginTop:"9%"}}/>
          <DrinkCard
            title="Lьо Фотограф Сира" 
            price="50.00лв" 
            weight="750ml" 
            img={LePhographeRed}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Сайкъл Мерло" 
            price="36.00лв" 
            weight="750ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Сайкъл Каберне Совиньон" 
            price="36.00лв" 
            weight="750ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Сайкъл Мерло § Пино Ноар"
            price="18.00лв" 
            weight="375ml" 
            img={Cycle}/>
          <div style={{marginTop:"25%"}}/>
        </div>
      </div>
    );
  }
  export default RedWinePage