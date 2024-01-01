import FoodCard from "../../../Components/FoodCard.js"
import Boloneze from "../../../Images/Food/Pasta/Boloneze.GIF"
import Karnobara from "../../../Images/Food/Pasta/Karnobara.GIF"
function Pasta() {
    return (
      <div className="App">
        <div className="Food">

          <FoodCard 
            title="Spaghetti Bolognese" 
            ingredients="400g" 
            price="20.00lv" 
            weight="" 
            img={Boloneze}/>

          <FoodCard 
            title="Spaghetti Carbonara" 
            ingredients="400g" 
            price="20.00lv" 
            weight="" 
            img={Karnobara}/>
        </div>
      </div>
    );
  }
  export default Pasta