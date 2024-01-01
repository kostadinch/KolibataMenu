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
            title="Le Photographe Rose" 
            price="50.00lv" 
            weight="750ml" 
            img={LePhographeRose }/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Cycle Rose" 
            price="36.00lv" 
            weight="750ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Cycle Rose" 
            price="18.00lv" 
            weight="375ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Bottega Prosecco" 
            price="40.00lv" 
            weight="750ml" 
            img={BottegaProsecco}/>
          <div style={{marginTop:"25%"}}/>
        </div>
      </div>
    );
  }
  export default RosePage