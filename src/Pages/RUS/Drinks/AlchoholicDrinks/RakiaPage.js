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
            title="Карнобатская Графе" 
            price="6.00лв" 
            weight="50ml" 
            img={Karnobatska}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Янтарный Бренди" 
            price="7.00лв" 
            weight="50ml" 
            img={Kehlibar}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Братья Минкови" 
            price="8.00лв" 
            weight="50ml" 
            img={MinkovBrothers}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Аристократ"
            price="8.00лв" 
            weight="50ml" 
            img={Aristokrat}/>
          <div style={{marginTop:"4%"}}/>
          <DrinkCard 
            title="Бургас 63"
            price="8.00лв" 
            weight="50ml" 
            img={Burgas63}/>
          <div style={{marginTop:"14%"}}/>
        </div>
      </div>
    );
  }
  export default RakiaPage