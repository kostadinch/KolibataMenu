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
            ingredients="томатный соус, моцарелла, оливковое масло, орегано" 
            price="20.00лв" 
            weight="600g" 
            img={Margarita}/>

          <FoodCard 
            title="Кватро Формаджи" 
            ingredients="томатный соус, четыре вида сыра, оливковое масло" 
            price="25.00лв" 
            weight="500g" 
            img={ChetiriSirena}/>

          <FoodCard 
            title="Каприччиоза" 
            ingredients="томатный соус, ветчина, бекон, грибы, моцарелла, оливковое масло, орегано, оливки" 
            price="25.00лв" 
            weight="500g" 
            img={Kaprichoza}/>

          <FoodCard 
            title="Пеппероне" 
            ingredients="томатный соус, моцарелла, салями пепперони, орегано" 
            price="25.00лв" 
            weight="500g" 
            img={Peperone}/>

          <FoodCard 
            title="Вегетарианец" 
            ingredients="томатный соус, лук, свежий перец, грибы, моцарелла, оливки, оливковое масло, орегано" 
            price="22.00лв" 
            weight="500g" 
            img={Vegetariana}/>
            
          <FoodCard 
            title="Домашний Хлеб с Моцареллой" 
            ingredients="350g" 
            price="6.00лв"
            weight="" 
            img={ParlenkaSMocarela}/>

        </div>
      </div>
    );
  }
  export default Pizzas