import Language from "../Components/Language.js";
import Bulgarian from "../Images/Languages/Bulgaria.jpeg"
import English from "../Images/Languages/UK.jpeg"
import Russian from "../Images/Languages/Russia.jpeg"
import { Link } from 'react-router-dom'
export default function ChooseLanguagePage() {
    return(
        <div className="Language">
            <div style={{width:"75%",marginTop:"14%",marginBottom:"15%"}}>
                <Link to="/BG/FoodOrDrink">
                    <Language
                        title="Български" 
                        img={Bulgarian}/>  
                </Link>
            </div>
            <div style={{width:"75%",marginBottom:"15%"}}>
                <Link to="/ENG/FoodOrDrink">
                    <Language 
                        title="English" 
                        img={English}/>  
                </Link>
            </div>   
            <div style={{width:"75%",marginBottom:"15%"}}>
                <Link to="/RUS/FoodOrDrink">
                    <Language 
                        title="Русский" 
                        img={Russian}/>  
                </Link>
            </div>                    
        </div>
    )
}