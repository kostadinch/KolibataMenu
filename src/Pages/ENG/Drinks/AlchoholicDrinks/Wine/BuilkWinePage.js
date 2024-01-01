import DrinkCard from "../../../../../Components/DrinkCard.js"
import ChatoKarnobat from "../../../../../Images/Drinks/AlchoholicDrinks/Wine/BuilkWine/ChatoKarnobat.jpeg"
function BulkWinePage() {
    return (
    <div className="App">
      <div className="Drinks">

          <DrinkCard 
            title="White Chateau Karnobat" 
            price="25.00лв" 
            weight="1000ml" 
            img={ChatoKarnobat}/>
          <DrinkCard 
            title="White Chateau Karnobat" 
            price="13.00лв" 
            weight="500ml" 
            img={ChatoKarnobat}/>
          <DrinkCard 
            title="Rose Chateau Karnobat" 
            price="25.00лв" 
            weight="1000ml" 
            img={ChatoKarnobat}/>
          <DrinkCard 
            title="Rose Chateau Karnobat"
            price="13.00лв" 
            weight="500ml" 
            img={ChatoKarnobat}/>
          <DrinkCard 
            title="Red Chateau Karnobat"
            price="25.00лв" 
            weight="1000ml" 
            img={ChatoKarnobat}/>
          <DrinkCard 
            title="Red Chateau Karnobat" 
            price="13.00лв" 
            weight="500ml" 
            img={ChatoKarnobat}/>
          <div style={{marginTop:"7%"}}/>
        </div>
      </div>
    );
  }
  export default BulkWinePage