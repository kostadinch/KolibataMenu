import FoodOrDrink from "../../../Components/FoodOrDrink.js";
import Drinks from "../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/HotChocolateWithMilk.GIF"
import Food from "../../../Images/Food/Pizza/Margarita.GIF"
import { Link } from 'react-router-dom'
export default function ChooseFoodOrDrinkPage() {
    return(
    <div className="App" >
        <div className="FoodOrDrink">
            <div style={{width:"90%", marginTop:"15%"}}>
                <Link to="/RUS/Food">
                    <FoodOrDrink
                        title="Еда" 
                        img={Food}/>  
                </Link>
            </div>
            <div style={{width:"90%", marginTop:"15%"}}>
                <Link to="/RUS/Drinks">
                    <FoodOrDrink
                        title="Напитки" 
                        img={Drinks}/>  
                </Link>
            </div>      
            <div style={{marginTop:"7%"}}>
            </div>         
        </div>
    </div>
    )
}