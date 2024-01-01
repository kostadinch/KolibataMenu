import FoodCard from "../../../Components/FoodCard.js"
import VeganNuggets from "../../../Images/Food/Appetizers/VeganNuggets.jpeg"
import ChickenNuggets from "../../../Images/Food/Appetizers/ChickenNuggets.GIF"
import Omellette from "../../../Images/Food/Appetizers/Omellette.GIF"
import FriedPotatoes from "../../../Images/Food/Appetizers/FriedPotatoes.GIF"
import FriedPotatoesWithCheese2 from "../../../Images/Food/Appetizers/FriedPotatoesWithCheese2.GIF"
function Appetizers() {
    return (
      <div className="App">
        <div className="Food">

          {/*<FoodCard 
            title="Веган Хапки" 
            ingredients="350g" 
            price="25.00lv" 
            weight="" 
            img={VeganNuggets}/>
    */}

          <FoodCard 
            title="Chicken Nuggets" 
            ingredients="350g" 
            price="25.00lv" 
            weight="" 
            img={ChickenNuggets}/>

          <FoodCard 
            title="Omellette" 
            ingredients="400g" 
            price="15.00lv" 
            weight="" 
            img={Omellette}/>

          <FoodCard 
            title="Fried Potatoes" 
            ingredients="400g" 
            price="8.00lv" 
            weight="" 
            img={FriedPotatoes}/>

          <FoodCard 
            title="Fried Potatoes With Cheese" 
            ingredients="450g" 
            price="10.00lv" 
            weight="" 
            img={FriedPotatoesWithCheese2}/>
        </div>
      </div>
    );
  }
  export default Appetizers