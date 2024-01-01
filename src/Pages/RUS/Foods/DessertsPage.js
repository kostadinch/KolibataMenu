import FoodCard from "../../../Components/FoodCard.js"
import Pancake from "../../../Images/Food/Desserts/Pancake.GIF"
import ChickenNuggets from "../../../Images/Food/Appetizers/ChickenNuggets.jpeg"
function Desserts() {
    return (
      <div className="App">
        <div className="Food">

          <FoodCard 
            title="Блин" 
            ingredients="with chocolate, honey, forest fruits" 
            price="8.00лв" 
            weight="350g" 
            img={Pancake}/>

          {/*<FoodCard 
            title="Парче Торта" 
            ingredients="350g" 
            price="8.00лв" 
            weight="" 
            img={ChickenNuggets}/>*/}
        </div>
      </div>
    );
  }
  export default Desserts