import DrinkCard from "../../../../Components/DrinkCard.js"
import AperolSpritz from "../../../../Images/Drinks/AlchoholicDrinks/Other/AperolSpritz.jpeg"
import Jägerbomb from "../../../../Images/Drinks/AlchoholicDrinks/Other/Jägerbomb.jpeg"
import Jägermeister from "../../../../Images/Drinks/AlchoholicDrinks/Other/Jägermeister.jpeg"
import Aftershock from "../../../../Images/Drinks/AlchoholicDrinks/Other/AfterShock.jpeg"
import MastikaKarnobat from "../../../../Images/Drinks/AlchoholicDrinks/Other/MastikaKarnobat.jpeg"
import OuzoZorbas from "../../../../Images/Drinks/AlchoholicDrinks/Other/OuzoZorbas.jpeg"
import MintKarnobat from "../../../../Images/Drinks/AlchoholicDrinks/Other/MintKarnobat.jpeg"
import SavoyTequila from "../../../../Images/Drinks/AlchoholicDrinks/Other/SavoyTequila.jpeg"
import OuzoPlomari from "../../../../Images/Drinks/AlchoholicDrinks/Other/OuzoPlomari.jpeg"
import Baileys from "../../../../Images/Drinks/AlchoholicDrinks/Other/Baileys.jpeg"
import BiancoMartini from "../../../../Images/Drinks/AlchoholicDrinks/Other/BiancoMartini.jpeg"
import PepeLopezTequila from "../../../../Images/Drinks/AlchoholicDrinks/Other/PepeLopezTequila.jpeg"

function OtherPage() {
    return (
      <div className="App">
        <div className="Drinks">

          <DrinkCard 
            title="Jägermeister" 
            price="6.00лв" 
            weight="40ml" 
            img={Jägermeister}/>
          <DrinkCard 
            title="Aftershock" 
            price="6.00лв" 
            weight="40ml" 
            img={Aftershock}/>
          <DrinkCard 
            title="Aperol Spritz" 
            price="10.00лв" 
            weight="250ml" 
            img={AperolSpritz}/>
          <DrinkCard 
            title="Jägerbomb" 
            price="10.00лв" 
            weight="150ml" 
            img={Jägerbomb}/>
          <DrinkCard 
            title="Baileys"
            price="8.00лв" 
            weight="50ml" 
            img={Baileys}/>
          <DrinkCard 
            title="Mastika Karnobat" 
            price="5.00лв" 
            weight="50ml" 
            img={MastikaKarnobat}/>
          <DrinkCard 
            title="Ouzo Zorbas" 
            price="5.00лв" 
            weight="50ml" 
            img={OuzoZorbas}/>
          <DrinkCard 
            title="Mint Karnobat" 
            price="5.00лв" 
            weight="50ml" 
            img={MintKarnobat}/>
          <DrinkCard 
            title="Savoy Tequila" 
            price="5.00лв" 
            weight="50ml" 
            img={SavoyTequila}/>
          <DrinkCard 
            title="Ouzo Plomari" 
            price="7.00лв" 
            weight="50ml" 
            img={OuzoPlomari}/>
          <DrinkCard 
            title="Bianco Martini" 
            price="7.00лв" 
            weight="50ml" 
            img={BiancoMartini}/>
          <DrinkCard 
            title="Pepe Lopez Tequila" 
            price="6.00лв" 
            weight="50ml" 
            img={PepeLopezTequila}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default OtherPage