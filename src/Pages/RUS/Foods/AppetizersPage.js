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
            title="Веган Наггетсы" 
            ingredients="350g" 
            price="25.00лв" 
            weight="" 
            img={VeganNuggets}/>
    */}

          <FoodCard 
            title="Куриные Наггетсы" 
            ingredients="350g" 
            price="25.00лв" 
            weight="" 
            img={ChickenNuggets}/>

          <FoodCard 
            title="Омлет" 
            ingredients="400g" 
            price="15.00лв" 
            weight="" 
            img={Omellette}/>

          <FoodCard 
            title="Жареная Картошка" 
            ingredients="400g" 
            price="8.00лв" 
            weight="" 
            img={FriedPotatoes}/>

          <FoodCard 
            title="Жареный Картофель с Сыром" 
            ingredients="450g" 
            price="10.00лв" 
            weight="" 
            img={FriedPotatoesWithCheese2}/>
        </div>
      </div>
    );
  }
  export default Appetizers