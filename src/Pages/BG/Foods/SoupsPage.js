import FoodCard from "../../../Components/FoodCard.js"
import Shkembe from "../../../Images/Food/Soups/Shkembe.GIF"
import Bob from "../../../Images/Food/Soups/Bob.GIF"
import ChickenSoup from "../../../Images/Food/Soups/ChickenSoup.GIF"
function Soups() {
    return (
      <div className="App">
        <div className="Food">
          
          <FoodCard 
            title="Пилешка Супа" 
            ingredients="350ml" 
            price="8.00лв" 
            weight="" 
            img={ChickenSoup}/>

          <FoodCard 
            title="Боб" 
            ingredients="350ml" 
            price="8.00лв" 
            weight="" 
            img={Bob}/>

          <FoodCard 
            title="Шкембе" 
            ingredients="350ml" 
            price="9.00лв" 
            weight="" 
            img={Shkembe}/>
        </div>
      </div>
    );
  }
  export default Soups