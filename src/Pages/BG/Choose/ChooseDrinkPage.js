import FoodOrDrink from "../../../Components/FoodOrDrink.js";
import AlchoholicDrinks from "../../../Images/Drinks/AlchoholicDrinks/Other/Jägerbomb.jpeg"
import NonAlchoholicDrinks from  "../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/CocaCola.jpeg"
import { Link } from 'react-router-dom'
export default function ChooseFoodOrDrinkPage() {
    return(
    <div className="App">
        <div className="Drinks">
            <div style={{width:"90%", marginTop:"15%"}}>
                <Link to="/BG/AlchoholicDrinks">
                    <FoodOrDrink
                        title="Алкохолни Напитки" 
                        img={AlchoholicDrinks}/>  
                </Link>
            </div>
            <div style={{width:"90%", marginTop:"15%"}}>
                <Link to="/BG/NonAlchoholicDrinks">
                    <FoodOrDrink
                        title="Безалкохолни Напитки" 
                        img={NonAlchoholicDrinks}/>  
                </Link>
            </div>      
            <div style={{marginTop:"20%"}}>
            </div>         
        </div>
    </div>
    )
}