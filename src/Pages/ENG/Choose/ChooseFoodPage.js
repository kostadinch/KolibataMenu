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
                <Link to="/ENG/Pizzas">
                    <FoodType
                        title="Pizza" 
                        img={Pizza}/>  
                </Link>
            </div>
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Appetizers">
                    <FoodType
                        title="Appetizers" 
                        img={Appetizers}/> 
                </Link> 
            </div>      
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/BBQ">
                    <FoodType
                        title="BBQ With an Included Side Dish" 
                        img={BBQ}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Burgers">
                    <FoodType
                        title="Burgers" 
                        img={Burgers}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Pasta">
                    <FoodType
                        title="Pasta" 
                        img={Pasta}/> 
                </Link> 
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Salads">
                    <FoodType
                        title="Salads" 
                        img={Salads}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Soups">
                    <FoodType
                        title="Soups" 
                        img={Soups}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/ENG/Desserts">
                    <FoodType
                        title="Desserts" 
                        img={Desserts}/>  
                </Link>
            </div>   
            <div style={{marginTop:"5%"}}/>
        </div>
    </div>
    )
}