import FoodCard from "../../../Components/FoodCard.js"
import ShopskaSalad from "../../../Images/Food/Salads/ShopskaSalad.GIF"
import Mlechna from "../../../Images/Food/Salads/Mlechna.GIF"
import TomatoesSalad from "../../../Images/Food/Salads/Tomatoes.GIF"
import ZeleSMorkovi from "../../../Images/Food/Salads/ZeleSMorkovi.GIF"
import Liutenitsa from "../../../Images/Food/Salads/Liutenitsa.GIF"
function Salads() {
    return (
      <div className="App">
        <div className="Food">

          <FoodCard 
            title="Шопска Салата" 
            ingredients="400g" 
            price="12.00лв" 
            weight="" 
            img={ShopskaSalad}/>

          <FoodCard 
            title="Домати" 
            ingredients="300g" 
            price="10.00лв" 
            weight="" 
            img={TomatoesSalad}/>

          <FoodCard 
            title="Зеле с Моркови" 
            ingredients="400g" 
            price="9.00лв" 
            weight="" 
            img={ZeleSMorkovi}/>

          <FoodCard 
            title="Млечна Салата" 
            ingredients="300g" 
            price="10.00лв" 
            weight="" 
            img={Mlechna}/>

          <FoodCard 
            title="Лютеница" 
            ingredients="200g" 
            price="9.00лв" 
            weight="" 
            img={Liutenitsa}/>
        </div>
      </div>
    );
  }
  export default Salads