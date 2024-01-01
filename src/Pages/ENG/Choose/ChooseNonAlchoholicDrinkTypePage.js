import ColdDrink from "../../../Images/Drinks/NonalchoholicDrinks/ColdDrinks/CocaCola.jpeg"
import HotDrink from "../../../Images/Drinks/NonalchoholicDrinks/HotDrinks/Tea.jpeg"
import { Link } from 'react-router-dom'
import FoodOrDrink from "../../../Components/FoodOrDrink.js";
export default function ChooseNonalchoholicDrinkPage() {
    return(
    <div className="App">
        <div className="DrinkType">
            <div style={{width:"90%", marginTop:"15%"}}>
                <Link to="/ENG/HotDrinks">
                    <FoodOrDrink
                        title="Hot Drinks" 
                        img={HotDrink}/>  
                </Link>
            </div>
            <div style={{width:"90%", marginTop:"15%"}}>
                <Link to="/ENG/ColdDrinks">
                    <FoodOrDrink
                        title="Cold Drinks" 
                        img={ColdDrink}/> 
                </Link> 
            </div> 
            <div style={{marginTop:"25%"}}/>
        </div>
    </div>
    )
}