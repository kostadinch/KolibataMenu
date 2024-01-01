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
                <Link to="/RUS/HotDrinksWithAlchohol">
                    <FoodType
                        title="Горячие Напитки с Алкоголем" 
                        img={HotAlchoholicDrink}/>  
                </Link>
            </div>
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Beer">
                    <FoodType
                        title="Пиво" 
                        img={Beer}/> 
                </Link> 
            </div>      
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Wine">
                    <FoodType
                        title="Вино" 
                        img={Wine}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Whiskey">
                    <FoodType
                        title="Виски" 
                        img={Whiskey}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/VodkaAndGin">
                    <FoodType
                        title="Водка и Джин" 
                        img={VodkaAndGin}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Rakia">
                    <FoodType
                        title="Ракия" 
                        img={Rakia}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Rum">
                    <FoodType
                        title="Ром" 
                        img={Rum}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Tatratea">
                    <FoodType
                        title="Татра Чай" 
                        img={Tatratea}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Other">
                    <FoodType
                        title="Другой" 
                        img={Other}/>  
                </Link>
            </div>  
            <div style={{marginTop:"5%"}}/>
        </div>
    </div>
    )
}