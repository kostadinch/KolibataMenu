import FoodCard from "../../../Components/FoodCard.js"
import VeganNuggets from "../../../Images/Food/Appetizers/VeganNuggets.jpeg"
import TeleshkiBurger from "../../../Images/Food/Burger/TeleshkiBurger.GIF"
function Burgers() {
    return (
      <div className="App">
        <div className="Food">

          {/*<FoodCard 
            title="Веган Бургер" 
            ingredients="с пържени картофи" 
            price="20.00лв" 
            weight="700g" 
            img={VeganNuggets}/>*/}

          <FoodCard 
            title="Телешки Бургер" 
            ingredients="с пържени картофи" 
            price="20.00лв" 
            weight="700g" 
            img={TeleshkiBurger}/>
        </div>
      </div>
    );
  }
  export default Burgers