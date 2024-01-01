import FoodCard from "../../../Components/FoodCard.js"
import ChetiriSirena from "../../../Images/Food/Pizza/ChetiriSirena.GIF"
import Kaprichoza from "../../../Images/Food/Pizza/Kaprichoza.GIF"
import Margarita from "../../../Images/Food/Pizza/Margarita.GIF"
import ParlenkaSMocarela from "../../../Images/Food/Pizza/ParlenkaSMocarela.GIF"
import Peperone from "../../../Images/Food/Pizza/Peperone.GIF"
import Vegetariana from "../../../Images/Food/Pizza/Vegetariana.GIF"
function Pizzas() {
    return (
      <div className="App">
        <div className="Food">
          <FoodCard 
            title="Margarita" 
            ingredients="tomato sauce, mozzarella, olive oil, oregano" 
            price="20.00лв" 
            weight="600g" 
            img={Margarita}/>

          <FoodCard 
            title="Quattro Formaggi" 
            ingredients="tomato sauce, four kinds of cheese, olive oil" 
            price="25.00лв" 
            weight="500g" 
            img={ChetiriSirena}/>

          <FoodCard 
            title="Capricciosa" 
            ingredients="tomato sauce, ham, bacon, mushrooms, mozzarella, olive oil, oregano, olive" 
            price="25.00лв" 
            weight="500g" 
            img={Kaprichoza}/>

          <FoodCard 
            title="Pepperone" 
            ingredients="tomato sauce, mozzarella, pepperoni salami, oregano" 
            price="25.00лв" 
            weight="500g" 
            img={Peperone}/>

          <FoodCard 
            title="Vegeterian" 
            ingredients="tomato sauce, onion, fresh peppers, mushrooms, mozzarella, olive, olive oil, oregano" 
            price="22.00лв" 
            weight="500g" 
            img={Vegetariana}/>
            
          <FoodCard 
            title="Homemade Bread With Mozzarella" 
            ingredients="350g" 
            price="6.00лв"
            weight="" 
            img={ParlenkaSMocarela}/>

        </div>
      </div>
    );
  }
  export default Pizzas