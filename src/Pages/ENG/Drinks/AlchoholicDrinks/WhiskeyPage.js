import DrinkCard from "../../../../Components/DrinkCard.js"
import SavoyWhiskey from "../../../../Images/Drinks/AlchoholicDrinks/Whiskey/SavoyWhiskey.jpeg"
import Jameson from "../../../../Images/Drinks/AlchoholicDrinks/Whiskey/Jameson.jpeg"
import Glenfiddich from "../../../../Images/Drinks/AlchoholicDrinks/Whiskey/Glenfiddich.jpeg"
import JohnieWalkerBlack from "../../../../Images/Drinks/AlchoholicDrinks/Whiskey/JohnieWalkerBlack.jpeg"
import FamousGrouse from "../../../../Images/Drinks/AlchoholicDrinks/Whiskey/FamousGrouse.jpeg"
import JackDaniels from "../../../../Images/Drinks/AlchoholicDrinks/Whiskey/JackDaniel's.jpeg"
function WhiskeyPage() {
    return (
      <div className="App">
        <div className="Drinks">

          <DrinkCard 
            title="Savoy Whiskey" 
            price="5.00lv" 
            weight="50ml" 
            img={SavoyWhiskey}/>
          <DrinkCard 
            title="Jameson" 
            price="8.00lv" 
            weight="50ml" 
            img={Jameson}/>
          <DrinkCard 
            title="Glenfiddich" 
            price="15.00lv" 
            weight="50ml" 
            img={Glenfiddich}/>
          <DrinkCard 
            title="Johnie Walker Black"
            price="15.00lv" 
            weight="50ml" 
            img={JohnieWalkerBlack}/>
          <DrinkCard 
            title="Famous Grouse"
            price="8.00lv" 
            weight="50ml" 
            img={FamousGrouse}/>
          <DrinkCard 
            title="Jack Daniel's" 
            price="10.00lv" 
            weight="50ml" 
            img={JackDaniels}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default WhiskeyPage