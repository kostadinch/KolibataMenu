import DrinkCard from "../../../../../Components/DrinkCard.js"
import LePhographeWhite from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/WhiteWine/LePhographeWhite.jpeg"
import Cycle from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/Cycle.jpeg"
function WhiteWinePage() {
    return (
      <div className="App">
        <div className="Drinks">
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Льо Фотограф Совиньон Блан" 
            price="60.00лв" 
            weight="750ml" 
            img={LePhographeWhite}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Сайкъл Совиньон Блан" 
            price="40.00лв" 
            weight="750ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Сайкъл Совиньон Блан"
            price="20.00лв" 
            weight="375ml" 
            img={Cycle}/>
          <div style={{marginTop:"25%"}}/>
        </div>
      </div>
    );
  }
  export default WhiteWinePage