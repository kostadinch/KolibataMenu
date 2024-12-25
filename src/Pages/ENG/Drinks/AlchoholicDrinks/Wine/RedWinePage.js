import DrinkCard from "../../../../../Components/DrinkCard.js"
import LePhographeRed from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/RedWine/LePhographeRed.jpeg"
import Cycle from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/Cycle.jpeg"

function RedWinePage() {
    return (
      <div className="App">
        <div className="Drinks">
          <div style={{marginTop:"9%"}}/>
          <DrinkCard
            title="Le Photographe Syrah" 
            price="60.00lv" 
            weight="750ml" 
            img={LePhographeRed}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Cycle Merlot" 
            price="40.00lv" 
            weight="750ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Cycle Cabernet Sauvignon" 
            price="40.00lv" 
            weight="750ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Cycle Merlot & Pinot Noir"
            price="20.00lv" 
            weight="375ml" 
            img={Cycle}/>
          <div style={{marginTop:"25%"}}/>
        </div>
      </div>
    );
  }
  export default RedWinePage