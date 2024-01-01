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
                <Link to="/RUS/RedWine">
                    <FoodType
                        title="Красное Вино" 
                        img={RedWine}/>  
                </Link>
            </div>
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/Rose">
                    <FoodType
                        title="Розе" 
                        img={Rose}/> 
                </Link> 
            </div>      
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/WhiteWine">
                    <FoodType
                        title="Белое Вино" 
                        img={WhiteWine}/>  
                </Link>
            </div>  
            <div style={{width:"80%",marginTop:"5%"}}>
                <Link to="/RUS/BuilkWine">
                    <FoodType
                        title="Создание Вина" 
                        img={Builk}/>  
                </Link>
            </div> 
            <div style={{marginTop:"5%"}}/>
        </div>
    </div>
    )
}