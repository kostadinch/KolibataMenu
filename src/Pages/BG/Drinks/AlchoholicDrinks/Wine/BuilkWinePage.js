import DrinkCard from "../../../../../Components/DrinkCard.js"
import ChatoKarnobat from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/BuilkWine/ChatoKarnobat.jpeg"
function BulkWinePage() {
    return (
    <div className="App">
      <div className="Drinks">

          <DrinkCard 
            title="Бяло Шато Карнобат" 
            price="30.00лв" 
            weight="1000ml" 
            img={ChatoKarnobat}/>
          <DrinkCard 
            title="Бяло Шато Карнобат" 
            price="15.00лв" 
            weight="500ml" 
            img={ChatoKarnobat}/>
          <DrinkCard 
            title="Розе Шато Карнобат" 
            price="30.00лв" 
            weight="1000ml" 
            img={ChatoKarnobat}/>
          <DrinkCard 
            title="Розе Шато Карнобат"
            price="15.00лв" 
            weight="500ml" 
            img={ChatoKarnobat}/>
          <DrinkCard 
            title="Червено Шато Карнобат"
            price="30.00лв" 
            weight="1000ml" 
            img={ChatoKarnobat}/>
          <DrinkCard 
            title="Червено Шато Карнобат" 
            price="15.00лв" 
            weight="500ml" 
            img={ChatoKarnobat}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default BulkWinePage