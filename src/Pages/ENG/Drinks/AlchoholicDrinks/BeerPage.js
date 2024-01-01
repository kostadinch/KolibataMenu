import DrinkCard from "../../../../Components/DrinkCard.js"
import Kamenitsa from "../../../../Images/Drinks/AlchoholicDrinks/Beer/Kamenitsa.jpeg"
import Staropramen from "../../../../Images/Drinks/AlchoholicDrinks/Beer/Staropramen.jpeg"
import Staropramen0 from "../../../../Images/Drinks/AlchoholicDrinks/Beer/Staropramen0%.jpeg"
import StellaArtois from "../../../../Images/Drinks/AlchoholicDrinks/Beer/StellaArtois.jpeg"
import LefeBlond from "../../../../Images/Drinks/AlchoholicDrinks/Beer/LefeBlond.jpeg"
import LefeBraun from "../../../../Images/Drinks/AlchoholicDrinks/Beer/LefeBraun.jpeg"
import Franziskaner from "../../../../Images/Drinks/AlchoholicDrinks/Beer/Franziskaner.jpeg"
import Guinness from "../../../../Images/Drinks/AlchoholicDrinks/Beer/Guinness.jpeg"
import Hoegaarden from "../../../../Images/Drinks/AlchoholicDrinks/Beer/Hoegaarden.jpeg"
import Corona from "../../../../Images/Drinks/AlchoholicDrinks/Beer/Corona.jpeg"
import Somersby from "../../../../Images/Drinks/AlchoholicDrinks/Beer/Somersby.jpeg"

function BeerPage() {
    return (
      <div className="App">
        <div className="Drinks">

          <DrinkCard 
            title="Franziskaner" 
            price="10.00лв" 
            weight="500ml" 
            img={Franziskaner}/>
          <DrinkCard 
            title="Guinness" 
            price="10.00лв" 
            weight="440ml" 
            img={Guinness}/>
          <DrinkCard 
            title="Kamenitsa" 
            price="6.00лв" 
            weight="500ml" 
            img={Kamenitsa}/>
          <DrinkCard 
            title="Stella Artois" 
            price="8.00лв" 
            weight="500ml" 
            img={StellaArtois}/>
          <DrinkCard 
            title="Leffe Blond" 
            price="10.00лв" 
            weight="500ml" 
            img={LefeBlond}/>
          <DrinkCard 
            title="Leffe Braun"
            price="10.00лв" 
            weight="500ml" 
            img={LefeBraun}/>
          <DrinkCard 
            title="Hoegaarden" 
            price="10.00лв" 
            weight="330ml" 
            img={Hoegaarden}/>
          <DrinkCard 
            title="Corona" 
            price="8.00лв" 
            weight="355ml" 
            img={Corona}/>
          <DrinkCard 
            title="Somersby Cider" 
            price="8.00лв" 
            weight="330ml" 
            img={Somersby}/>
          <DrinkCard 
            title="Staropramen" 
            price="8.00лв" 
            weight="500ml" 
            img={Staropramen}/>
          <DrinkCard 
            title="Staropramen 0%" 
            price="8.00лв" 
            weight="500ml" 
            img={Staropramen0}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default BeerPage