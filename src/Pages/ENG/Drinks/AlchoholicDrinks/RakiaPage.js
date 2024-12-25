import DrinkCard from "../../../../Components/DrinkCard.js"
import Karnobatska from "../../../../Images/Drinks/AlchoholicDrinks/Rakia/Karnobatska.jpeg"
import Kehlibar from "../../../../Images/Drinks/AlchoholicDrinks/Rakia/Kehlibar.jpeg"
import MinkovBrothers from "../../../../Images/Drinks/AlchoholicDrinks/Rakia/MinkovBrothers.jpeg"
import Aristokrat from "../../../../Images/Drinks/AlchoholicDrinks/Rakia/Aristokrat.jpeg"
import Burgas63 from "../../../../Images/Drinks/AlchoholicDrinks/Rakia/Burgas63.jpeg"
function RakiaPage() {
    return (
      <div className="App">
        <div className="Drinks"> 
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Karnobatska Grape" 
            price="6.00lv" 
            weight="50ml" 
            img={Karnobatska}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Amber Brandy" 
            price="7.00lv" 
            weight="50ml" 
            img={Kehlibar}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Minkovi Brothers" 
            price="8.00lv" 
            weight="50ml" 
            img={MinkovBrothers}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Aristokrat"
            price="8.00lv" 
            weight="50ml" 
            img={Aristokrat}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Burgas 63"
            price="8.00lv" 
            weight="50ml" 
            img={Burgas63}/>
          <div style={{marginTop:"14%"}}/>
        </div>
      </div>
    );
  }
  export default RakiaPage