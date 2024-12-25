import FoodCard from "../../../Components/FoodCard.js"
import Boloneze from "../../../Images/Food/Pasta/Boloneze.GIF"
import Karnobara from "../../../Images/Food/Pasta/Karnobara.GIF"
function Pasta() {
    return (
      <div className="App">
        <div className="Food">

          <FoodCard 
            title="Спагети Болонезе" 
            ingredients="400g" 
            price="25.00лв" 
            weight="" 
            img={Boloneze}/>

          <FoodCard 
            title="Спагети Карбонара" 
            ingredients="400g" 
            price="25.00лв" 
            weight="" 
            img={Karnobara}/>
        </div>
      </div>
    );
  }
  export default Pasta