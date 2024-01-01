import FoodType from "../../../Components/FoodType.js";
import WhiteWine from "../../../Images/Drinks/AlchoholicDrinks/Wine/WhiteWine/LePhographeWhite.jpeg"
import Rose from "../../../Images/Drinks/AlchoholicDrinks/Wine/Rose/LePhographeRose.jpeg"
import Builk from "../../../Images/Drinks/AlchoholicDrinks/Wine/BuilkWine/ChatoKarnobat.jpeg"
import RedWine from "../../../Images/Drinks/AlchoholicDrinks/Wine/RedWine/LePhographeRed.jpeg"



import { Link } from 'react-router-dom'
export default function ChooseWineTypePage() {
    return(
    <div className="App">
        <div className="DrinkType">
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/RedWine">
                    <FoodType
                        title="Червено Вино" 
                        img={RedWine}/>  
                </Link>
            </div>
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/Rose">
                    <FoodType
                        title="Розе" 
                        img={Rose}/> 
                </Link> 
            </div>      
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/WhiteWine">
                    <FoodType
                        title="Бяло Вино" 
                        img={WhiteWine}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/BG/BuilkWine">
                    <FoodType
                        title="Наливно Вино" 
                        img={Builk}/>  
                </Link>
            </div> 
            <div style={{marginTop:"5%"}}/>
        </div>
    </div>
    )
}