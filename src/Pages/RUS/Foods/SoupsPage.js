import FoodCard from "../../../Components/FoodCard.js"
import Bob from "../../../Images/Food/Soups/Bob.GIF"
import ChickenSoup from "../../../Images/Food/Soups/ChickenSoup.GIF"
import Shkembe from "../../../Images/Food/Soups/Shkembe.GIF"
function Soups() {
    return (
      <div className="App">
        <div className="Food">
          
          <FoodCard 
            title="Куриный суп" 
            ingredients="350ml" 
            price="8.00лв" 
            weight="" 
            img={ChickenSoup}/>

          <FoodCard 
            title="Бобовый Суп" 
            ingredients="350ml" 
            price="8.00лв" 
            weight="" 
            img={Bob}/>

          <FoodCard 
            title="Суп из Рубца" 
            ingredients="350g" 
            price="9.00лв" 
            weight="" 
            img={Shkembe}/>
        </div>
      </div>
    );
  }
  export default Soups