import FoodType from "../../../Components/FoodType.js";
import Burgers from "../../../Images/Food/Burger/TeleshkiBurger.GIF"
import Pasta from "../../../Images/Food/Pasta/Karnobara.GIF"
import Appetizers from "../../../Images/Food/Appetizers/FriedPotatoesWithCheese2.GIF"
import Salads from "../../../Images/Food/Salads/ShopskaSalad.GIF"
import BBQ from "../../../Images/Food/BBQ/SvinskiRebra.GIF"
import Soups from "../../../Images/Food/Soups/ChickenSoup.GIF"
import Desserts from "../../../Images/Food/Desserts/Pancake.GIF"
import Pizza from "../../../Images/Food/Pizza/Peperone.GIF"
import { Link } from 'react-router-dom'
export default function ChooseFoodPage() {
    return(
    <div className="App">
        <div className="FoodType">
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/Pizzas">
                    <FoodType
                        title="Пици" 
                        img={Pizza}/>  
                </Link>
            </div>
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/Appetizers">
                    <FoodType
                        title="Предястия" 
                        img={Appetizers}/> 
                </Link> 
            </div>      
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/BBQ">
                    <FoodType
                        title="Скара с включена гарнитура" 
                        img={BBQ}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/Burgers">
                    <FoodType
                        title="Бургери" 
                        img={Burgers}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/Pasta">
                    <FoodType
                        title="Спагети" 
                        img={Pasta}/> 
                </Link> 
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/Salads">
                    <FoodType
                        title="Салати" 
                        img={Salads}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/Soups">
                    <FoodType
                        title="Супи" 
                        img={Soups}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/Desserts">
                    <FoodType
                        title="Десерти" 
                        img={Desserts}/>  
                </Link>
            </div>   
            <div style={{marginTop:"5%"}}/>
        </div>
    </div>
    )
}