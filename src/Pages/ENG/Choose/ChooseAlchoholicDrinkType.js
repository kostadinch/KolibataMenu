import FoodType from "../../../Components/FoodType.js";
import VodkaAndGin from "../../../Images/Drinks/AlchoholicDrinks/VodkaAndGin/Finlandia.jpeg"
import Rakia from "../../../Images/Drinks/AlchoholicDrinks/Rakia/Aristokrat.jpeg"
import Rum from "../../../Images/Drinks/AlchoholicDrinks/Rum/SavoyRum.jpeg"
import Beer from "../../../Images/Drinks/AlchoholicDrinks/Beer/Kamenitsa.jpeg"
import Whiskey from "../../../Images/Drinks/AlchoholicDrinks/Whiskey/SavoyWhiskey.jpeg"
import Other from "../../../Images/Drinks/AlchoholicDrinks/Other/Jägerbomb.jpeg"
import Wine from "../../../Images/Drinks/AlchoholicDrinks/Wine/BuilkWine/ChatoKarnobat.jpeg"
import Tatratea from "../../../Images/Drinks/AlchoholicDrinks/Other/Tatratea.jpeg"
import HotAlchoholicDrink from "../../../Images/Drinks/AlchoholicDrinks/HotDrinksWithAlchohol/MulledWine.jpeg"
import { Link } from 'react-router-dom'
export default function ChooseAlchoholDrinkTypePage() {
    return(
    <div className="App">
        <div className="DrinkType">
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/HotDrinksWithAlchohol">
                    <FoodType
                        title="Hot Drinks With Alchohol" 
                        img={HotAlchoholicDrink}/>  
                </Link>
            </div>
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Beer">
                    <FoodType
                        title="Beer" 
                        img={Beer}/> 
                </Link> 
            </div>      
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Wine">
                    <FoodType
                        title="Wine" 
                        img={Wine}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Whiskey">
                    <FoodType
                        title="Whiskey" 
                        img={Whiskey}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/VodkaAndGin">
                    <FoodType
                        title="Vodka & Gin" 
                        img={VodkaAndGin}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Rakia">
                    <FoodType
                        title="Rakia" 
                        img={Rakia}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Rum">
                    <FoodType
                        title="Rum" 
                        img={Rum}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Tatratea">
                    <FoodType
                        title="Tatratea" 
                        img={Tatratea}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Other">
                    <FoodType
                        title="Other" 
                        img={Other}/>  
                </Link>
            </div>  
            <div style={{marginTop:"5%"}}/>
        </div>
    </div>
    )
}