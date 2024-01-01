import FoodCard from "../../../Components/FoodCard.js"
import Bob from "../../../Images/Food/Soups/Bob.GIF"
import ChickenSoup from "../../../Images/Food/Soups/ChickenSoup.GIF"
import Shkembe from "../../../Images/Food/Soups/Shkembe.GIF"
function Soups() {
    return (
      <div className="App">
        <div className="Food">
          
          <FoodCard 
            title="Chicken Soup" 
            ingredients="350ml" 
            price="7.00лв" 
            weight="" 
            img={ChickenSoup}/>

          <FoodCard 
            title="Bean Soup" 
            ingredients="350ml" 
            price="7.00лв" 
            weight="" 
            img={Bob}/>

          <FoodCard 
            title="Tripe Soup" 
            ingredients="350g" 
            price="8.00лв" 
            weight="" 
            img={Shkembe}/>
        </div>
      </div>
    );
  }
  export default Soups