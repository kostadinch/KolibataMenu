import FoodCard from "../../../Components/FoodCard.js"
import ChickenShishKebab from "../../../Images/Food/BBQ/PileshkiShishlik.GIF"
import ChickenFillet from "../../../Images/Food/BBQ/PileshkoFile.GIF"
import Sausage from "../../../Images/Food/BBQ/Sudjuk.GIF"
import PorkRibs from "../../../Images/Food/BBQ/SvinskiRebra.GIF"
import PorkSteak from "../../../Images/Food/BBQ/SvinskiVrat.GIF"
import PorkMeatballs from "../../../Images/Food/BBQ/SvinskoKiufte.GIF"
import BeefMeatballs from "../../../Images/Food/BBQ/TeleshkoKiufte.GIF"
import PorkShishKebab from "../../../Images/Food/BBQ/SvimskiShishlik.GIF"
function Pizzas() {
    return (
      <div className="App">
        <div className="Food">
          <FoodCard 
            title="Pork Meatballs" 
            ingredients="2 pieces" 
            price="10.00lv" 
            weight="360g" 
            img={PorkMeatballs}/>

          <FoodCard 
            title="Beef Meatballs" 
            ingredients="2 pieces" 
            price="14.00lv" 
            weight="360g" 
            img={BeefMeatballs}/>

          <FoodCard 
            title="Pork Ribs" 
            ingredients="450g" 
            price="35.00lv" 
            weight="" 
            img={PorkRibs}/>

          <FoodCard 
            title="Sausage" 
            ingredients="450g" 
            price="25.00lv" 
            weight="" 
            img={Sausage}/>

          <FoodCard 
            title="Pork Steak" 
            ingredients="350g" 
            price="25.00lv" 
            weight="" 
            img={PorkSteak}/>
            
          <FoodCard 
            title="Pork Shish Kebab" 
            ingredients="400g" 
            price="35.00lv"
            weight="" 
            img={PorkShishKebab}/>

          <FoodCard 
            title="Chicken Shish Kebab" 
            ingredients="400g" 
            price="33#5.00lv"
            weight="" 
            img={ChickenShishKebab}/> 

          <FoodCard 
            title="Chicken Fillet" 
            ingredients="350g" 
            price="25.00lv"
            weight="" 
            img={ChickenFillet}/>

          {/*<FoodCard 
            title="BBQ Mix" 
            ingredients="2kg" 
            price="120.00lv"
            weight="" 
            img={BBQMix}/>*/}

        </div>
      </div>
    );
  }
  export default Pizzas