import DrinkCard from "../../../../Components/DrinkCard.js"
import CaptainMorgan from "../../../../Images/Drinks/AlchoholicDrinks/Rum/CaptainMorgan.jpeg"
import KarnobatBrandy from "../../../../Images/Drinks/AlchoholicDrinks/Rum/KarnobatBrandy.jpeg"
import SavoyRum from "../../../../Images/Drinks/AlchoholicDrinks/Rum/SavoyRum.jpeg"
import Martell from "../../../../Images/Drinks/AlchoholicDrinks/Rum/Martell.jpeg"
import Metaxa5 from "../../../../Images/Drinks/AlchoholicDrinks/Rum/Metaxa5.jpeg"
import Metaxa7 from "../../../../Images/Drinks/AlchoholicDrinks/Rum/Metaxa7.jpeg"
import Metaxa12 from "../../../../Images/Drinks/AlchoholicDrinks/Rum/Metaxa12.jpeg"
import BrugalAñejo from "../../../../Images/Drinks/AlchoholicDrinks/Rum/BrugalAñejo.jpeg"
import BrugalBlanco from "../../../../Images/Drinks/AlchoholicDrinks/Rum/BrugalBlanco.jpeg"
import DeadManFingersHazelnut from "../../../../Images/Drinks/AlchoholicDrinks/Rum/DeadManFingersHazelnut.jpeg"
import DeadManFingersMango from "../../../../Images/Drinks/AlchoholicDrinks/Rum/DeadManFingersMango.jpeg"

function RumPage() {
    return (
      <div className="App">
        <div className="Drinks">
          <DrinkCard 
            title="Captain Morgan"
            price="8.00лв" 
            weight="50ml" 
            img={CaptainMorgan}/>
          <DrinkCard 
            title="Karnobat Brandy" 
            price="6.00лв" 
            weight="50ml" 
            img={KarnobatBrandy}/>
          <DrinkCard 
            title="Savoy Rum" 
            price="6.00лв" 
            weight="50ml" 
            img={SavoyRum}/>
          <DrinkCard 
            title="Metaxa*****"
            price="8.00лв" 
            weight="50ml" 
            img={Metaxa5}/>
          <DrinkCard 
            title="Metaxa*******"
            price="9.00лв" 
            weight="50ml" 
            img={Metaxa7}/>
          
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default RumPage