import FoodCard from "../../../Components/FoodCard.js"
import BBQMix from "../../../Images/Food/BBQ/BBQMix.jpeg"
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
            title="Свинско Кюфте" 
            ingredients="2 броя" 
            price="10.00лв" 
            weight="360g" 
            img={PorkMeatballs}/>

          <FoodCard 
            title="Телешко Кюфтер" 
            ingredients="2 броя" 
            price="12.00лв" 
            weight="360g" 
            img={BeefMeatballs}/>

          <FoodCard 
            title="Свински Ребра" 
            ingredients="450g" 
            price="30.00лв" 
            weight="" 
            img={PorkRibs}/>

          <FoodCard 
            title="Суджук" 
            ingredients="450g" 
            price="25.00лв" 
            weight="" 
            img={Sausage}/>

          <FoodCard 
            title="Свински Врат" 
            ingredients="350g" 
            price="25.00лв" 
            weight="" 
            img={PorkSteak}/>
            
          <FoodCard 
            title="Свински Шишлик" 
            ingredients="400g" 
            price="33.00лв"
            weight="" 
            img={PorkShishKebab}/>
          <FoodCard 
            title="Пилешки Шишлик" 
            ingredients="400g" 
            price="33.00лв"
            weight="" 
            img={ChickenShishKebab}/> 
          <FoodCard 
            title="Пилешко Филе" 
            ingredients="350g" 
            price="25.00лв"
            weight="" 
            img={ChickenFillet}/>
          <FoodCard 
            title="BBQ микс" 
            ingredients="2kg" 
            price="115.00лв"
            weight="" 
            img={BBQMix}/>

        </div>
      </div>
    );
  }
  export default Pizzas