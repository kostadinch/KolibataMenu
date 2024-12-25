import DrinkCard from "../../../../../Components/DrinkCard.js"
import LePhographeRose from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/Rose/LePhographeRose.jpeg"
import BottegaProsecco from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/Rose/BottegaProsecco.jpeg"
import Cycle from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/Cycle.jpeg"
function RosePage() {
    return (
      <div className="App">
        <div className="Drinks">
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Льо Фотограф Розе" 
            price="60.00лв" 
            weight="750ml" 
            img={LePhographeRose }/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Сайкъл Розе" 
            price="40.00лв" 
            weight="750ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Сайкъл Розе" 
            price="20.00лв" 
            weight="375ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Ботега Просеко" 
            price="50.00лв" 
            weight="750ml" 
            img={BottegaProsecco}/>
          <div style={{marginTop:"25%"}}/>
        </div>
      </div>
    );
  }
  export default RosePage