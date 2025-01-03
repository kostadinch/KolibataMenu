import DrinkCard from "../../../../../Components/DrinkCard.js"
import LePhographeWhite from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/WhiteWine/LePhographeWhite.jpeg"
import Cycle from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/Cycle.jpeg"
function WhiteWinePage() {
    return (
      <div className="App">
        <div className="Drinks">
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Le Photographe White" 
            price="60.00lv" 
            weight="750ml" 
            img={LePhographeWhite}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Cycle Chardonnay & Colombard" 
            price="40.00lv" 
            weight="750ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Cycle Sauvignon Blanc" 
            price="40.00lv" 
            weight="750ml" 
            img={Cycle}/>
          <div style={{marginTop:"9%"}}/>
          <DrinkCard 
            title="Cycle Sauvignon Blanc"
            price="20.00lv" 
            weight="375ml" 
            img={Cycle}/>
          <div style={{marginTop:"25%"}}/>
        </div>
      </div>
    );
  }
  export default WhiteWinePage