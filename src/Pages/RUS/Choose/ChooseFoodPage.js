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
                <Link to="/RUS/Pizzas">
                    <FoodType
                        title="Пицца" 
                        img={Pizza}/>  
                </Link>
            </div>
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Appetizers">
                    <FoodType
                        title="Закуски" 
                        img={Appetizers}/> 
                </Link> 
            </div>      
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/BBQ">
                    <FoodType
                        title="Барбекю с Гарниром" 
                        img={BBQ}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Burgers">
                    <FoodType
                        title="Бургеры" 
                        img={Burgers}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Pasta">
                    <FoodType
                        title="Макаронные Изделия" 
                        img={Pasta}/> 
                </Link> 
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Salads">
                    <FoodType
                        title="Салаты" 
                        img={Salads}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Soups">
                    <FoodType
                        title="Супы" 
                        img={Soups}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Desserts">
                    <FoodType
                        title="Десерты" 
                        img={Desserts}/>  
                </Link>
            </div>   
            <div style={{marginTop:"5%"}}/>
        </div>
    </div>
    )
}