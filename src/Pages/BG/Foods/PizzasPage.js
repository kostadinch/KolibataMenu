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
            title="Маргарита" 
            ingredients="доматен сос, кашкавал, риган, зехтин" 
            price="20.00лв" 
            weight="600g" 
            img={Margarita}/>

          <FoodCard 
            title="Четири Сирена" 
            ingredients="доматен сос, четири вида сирена, зехтин" 
            price="25.00лв" 
            weight="500g" 
            img={ChetiriSirena}/>

          <FoodCard 
            title="Капричоза" 
            ingredients="доматен сос, шунка, бекон, гъби, кашкавал, зехтин, риган, маслини" 
            price="25.00лв" 
            weight="500g" 
            img={Kaprichoza}/>

          <FoodCard 
            title="Пепероне" 
            ingredients="доматен сос, моцарела, пепероне, риган" 
            price="25.00лв" 
            weight="500g" 
            img={Peperone}/>

          <FoodCard 
            title="Вегетариана" 
            ingredients="доматен сос, лук, пресни чушки, гъби, кашкавал, маслина, зехтих, риган" 
            price="22.00лв" 
            weight="500g" 
            img={Vegetariana}/>
            
          <FoodCard 
            title="Пърленка с Моцарела" 
            ingredients="350g" 
            price="6.00лв"
            weight="" 
            img={ParlenkaSMocarela}/>

        </div>
      </div>
    );
  }
  export default Pizzas