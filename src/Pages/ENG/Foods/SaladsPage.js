import FoodCard from "../../../Components/FoodCard.js"
import ShopskaSalad from "../../../Images/Food/Salads/ShopskaSalad.GIF"
import ZeleSMorkovi from "../../../Images/Food/Salads/ZeleSMorkovi.GIF"
import Liutenitsa from "../../../Images/Food/Salads/Liutenitsa.GIF"
import Mlechna from "../../../Images/Food/Salads/Mlechna.GIF"
import Tomatoes from "../../../Images/Food/Salads/Tomatoes.GIF"
export default function Salads() {
    return (
      <div className="App">
        <div className="Food">

          <FoodCard 
            title="Shopska Salad" 
            ingredients="400g" 
            price="12.00lv" 
            weight="" 
            img={ShopskaSalad}/>

          <FoodCard 
            title="Tomatoes" 
            ingredients="300g" 
            price="10.00lv" 
            weight="" 
            img={Tomatoes}/>

          <FoodCard 
            title="Cabbege With Carrots" 
            ingredients="400g" 
            price="9.00lv" 
            weight="" 
            img={ZeleSMorkovi}/>

          <FoodCard 
            title="Milk Salad" 
            ingredients="300g" 
            price="10.00lv" 
            weight="" 
            img={Mlechna}/>

          <FoodCard 
            title="Paprika Salad" 
            ingredients="200g" 
            price="9.00lv" 
            weight="" 
            img={Liutenitsa}/>
        </div>
    </div>
        );
    }
                      

