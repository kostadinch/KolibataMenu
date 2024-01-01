import FoodOrDrink from "../../../Components/FoodOrDrink.js";
import AlchoholicDrinks from "../../../Images/Drinks/AlchoholicDrinks/Other/Jägerbomb.jpeg"
import NonAlchoholicDrinks from  "../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/CocaCola.jpeg"
import { Link } from 'react-router-dom'
export default function ChooseFoodOrDrinkPage() {
    return(
    <div className="App">
        <div className="Drinks">
            <div style={{width:"90%", marginTop:"15%"}}>
                <Link to="/RUS/AlchoholicDrinks">
                    <FoodOrDrink
                        title="Алкогольные Напитки" 
                        img={AlchoholicDrinks}/>  
                </Link>
            </div>
            <div style={{width:"90%", marginTop:"15%"}}>
                <Link to="/RUS/NonAlchoholicDrinks">
                    <FoodOrDrink
                        title="Безалкогольные Напитки" 
                        img={NonAlchoholicDrinks}/>  
                </Link>
            </div>      
            <div style={{marginTop:"20%"}}>
            </div>         
        </div>
    </div>
    )
}