import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.js";
import PizzasPageBG from './Pages/BG/Foods/PizzasPage.js'
import ChooseFoodOrDrinkPageBG from "./Pages/BG/Choose/ChooseFoodOrDrinkPage.js";
import ChooseFoodPageBG from "./Pages/BG/Choose/ChooseFoodPage.js";
import BBQPageBG from './Pages/BG/Foods/BBQPage.js'
import AppetizersPageBG from "./Pages/BG/Foods/AppetizersPage.js";
import BurgersPageBG from "./Pages/BG/Foods/BurgersPage.js";
import SaladsPageBG from "./Pages/BG/Foods/SaladsPage.js";
import PastaPageBG from "./Pages/BG/Foods/PastaPage.js";
import SoupsPageBG from "./Pages/BG/Foods/SoupsPage.js";
import DessertsPageBG from "./Pages/BG/Foods/DessertsPage.js";
import HotDrinksPageBG from "./Pages/BG/Drinks/NonAlchoholicDrinks/HotDrinksPage.js";
import BuilkWinePageBG from "./Pages/BG/Drinks/AlchoholicDrinks/Wine/BuilkWinePage.js";
import RedWinePageBG from "./Pages/BG/Drinks/AlchoholicDrinks/Wine/RedWinePage.js";
import RosePageBG from "./Pages/BG/Drinks/AlchoholicDrinks/Wine/RosePage.js";
import WhiteWinePageBG from "./Pages/BG/Drinks/AlchoholicDrinks/Wine/WhiteWinePage.js";
import BeerPageBG from "./Pages/BG/Drinks/AlchoholicDrinks/BeerPage.js";
import TatrateaPageBG from "./Pages/BG/Drinks/AlchoholicDrinks/TatrateaPage.js";
import HotDrinksWithAlchoholPageBG from "./Pages/BG/Drinks/AlchoholicDrinks/HotDrinksWithAlchoholPage.js";
import OtherPageBG from "./Pages/BG/Drinks/AlchoholicDrinks/OtherPage.js";
import RakiaPageBG from "./Pages/BG/Drinks/AlchoholicDrinks/RakiaPage.js";
import RumPageBG from "./Pages/BG/Drinks/AlchoholicDrinks/RumPage.js";
import VodkaAndGinPageBG from "./Pages/BG/Drinks/AlchoholicDrinks/VodkaAndGinPage.js";
import WhiskeyPageBG from "./Pages/BG/Drinks/AlchoholicDrinks/WhiskeyPage.js";
import ColdDrinksPageBG from "./Pages/BG/Drinks/NonAlchoholicDrinks/ColdDrinksPage.js";
import ChooseAlchoholDrinkTypePageBG from "./Pages/BG/Choose/ChooseAlchoholicDrinkType.js";
import ChooseDrinkPageBG from "./Pages/BG/Choose/ChooseDrinkPage.js";
import ChooseNonAlchoholicDrinkTypePageBG from "./Pages/BG/Choose/ChooseNonAlchoholicDrinkTypePage.js";
import ChooseWineTypePageBG from "./Pages/BG/Choose/ChooseWineTypePage.js";

import PizzasPageENG from './Pages/ENG/Foods/PizzasPage.js'
import ChooseFoodOrDrinkPageENG from "./Pages/ENG/Choose/ChooseFoodOrDrinkPage.js";
import ChooseFoodPageENG from "./Pages/ENG/Choose/ChooseFoodPage.js";
import BBQPageENG from './Pages/ENG/Foods/BBQPage.js'
import AppetizersPageENG from "./Pages/ENG/Foods/AppetizersPage.js";
import BurgersPageENG from "./Pages/ENG/Foods/BurgersPage.js";
import SaladsPageENG from "./Pages/ENG/Foods/SaladsPage.js";
import PastaPageENG from "./Pages/ENG/Foods/PastaPage.js";
import SoupsPageENG from "./Pages/ENG/Foods/SoupsPage.js";
import DessertsPageENG from "./Pages/ENG/Foods/DessertsPage.js";
import HotDrinksPageENG from "./Pages/ENG/Drinks/NonAlchoholicDrinks/HotDrinksPage.js";
import BuilkWinePageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/Wine/BuilkWinePage.js";
import RedWinePageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/Wine/RedWinePage.js";
import RosePageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/Wine/RosePage.js";
import WhiteWinePageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/Wine/WhiteWinePage.js";
import BeerPageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/BeerPage.js";
import TatrateaPageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/TatrateaPage.js";
import HotDrinksWithAlchoholPageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/HotDrinksWithAlchoholPage.js";
import OtherPageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/OtherPage.js";
import RakiaPageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/RakiaPage.js";
import RumPageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/RumPage.js";
import VodkaAndGinPageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/VodkaAndGinPage.js";
import WhiskeyPageENG from "./Pages/ENG/Drinks/AlchoholicDrinks/WhiskeyPage.js";
import ColdDrinksPageENG from "./Pages/ENG/Drinks/NonAlchoholicDrinks/ColdDrinksPage.js";
import ChooseAlchoholDrinkTypePageENG from "./Pages/ENG/Choose/ChooseAlchoholicDrinkType.js";
import ChooseDrinkPageENG from "./Pages/ENG/Choose/ChooseDrinkPage.js";
import ChooseNonAlchoholicDrinkTypePageENG from "./Pages/ENG/Choose/ChooseNonAlchoholicDrinkTypePage.js";
import ChooseWineTypePageENG from "./Pages/ENG/Choose/ChooseWineTypePage.js";

import PizzasPageRUS from './Pages/RUS/Foods/PizzasPage.js'
import ChooseFoodOrDrinkPageRUS from "./Pages/RUS/Choose/ChooseFoodOrDrinkPage.js";
import ChooseFoodPageRUS from "./Pages/RUS/Choose/ChooseFoodPage.js";
import BBQPageRUS from './Pages/RUS/Foods/BBQPage.js'
import AppetizersPageRUS from "./Pages/RUS/Foods/AppetizersPage.js";
import BurgersPageRUS from "./Pages/RUS/Foods/BurgersPage.js";
import SaladsPageRUS from "./Pages/RUS/Foods/SaladsPage.js";
import PastaPageRUS from "./Pages/RUS/Foods/PastaPage.js";
import SoupsPageRUS from "./Pages/RUS/Foods/SoupsPage.js";
import DessertsPageRUS from "./Pages/RUS/Foods/DessertsPage.js";
import HotDrinksPageRUS from "./Pages/RUS/Drinks/NonAlchoholicDrinks/HotDrinksPage.js";
import BuilkWinePageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/Wine/BuilkWinePage.js";
import RedWinePageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/Wine/RedWinePage.js";
import RosePageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/Wine/RosePage.js";
import WhiteWinePageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/Wine/WhiteWinePage.js";
import BeerPageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/BeerPage.js";
import TatrateaPageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/TatrateaPage.js";
import HotDrinksWithAlchoholPageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/HotDrinksWithAlchoholPage.js";
import OtherPageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/OtherPage.js";
import RakiaPageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/RakiaPage.js";
import RumPageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/RumPage.js";
import VodkaAndGinPageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/VodkaAndGinPage.js";
import WhiskeyPageRUS from "./Pages/RUS/Drinks/AlchoholicDrinks/WhiskeyPage.js";
import ColdDrinksPageRUS from "./Pages/RUS/Drinks/NonAlchoholicDrinks/ColdDrinksPage.js";
import ChooseAlchoholDrinkTypePageRUS from "./Pages/RUS/Choose/ChooseAlchoholicDrinkType.js";
import ChooseDrinkPageRUS from "./Pages/RUS/Choose/ChooseDrinkPage.js";
import ChooseNonAlchoholicDrinkTypePageRUS from "./Pages/RUS/Choose/ChooseNonAlchoholicDrinkTypePage.js";
import ChooseWineTypePageRUS from "./Pages/RUS/Choose/ChooseWineTypePage.js";


const router = createBrowserRouter([
  {
    path: "/kolibatamenu.eu",
    element: <App/>,
  },
  {
    path: "/BG/Pizzas",
    element: <PizzasPageBG/>,
  },
  {
    path: "/BG/FoodOrDrink",
    element: <ChooseFoodOrDrinkPageBG/>,
  },
  {
    path: "/BG/Food",
    element: <ChooseFoodPageBG/>,
  },
  {
    path: "/BG/BBQ",
    element: <BBQPageBG/>,
  },
  {
    path: "/BG/Appetizers",
    element: <AppetizersPageBG/>,
  },
  {
    path: "/BG/Burgers",
    element: <BurgersPageBG/>,
  },
  {
    path: "/BG/Desserts",
    element: <DessertsPageBG/>,
  },
  {
    path: "/BG/Salads",
    element: <SaladsPageBG/>,
  },
  {
    path: "/BG/Soups",
    element: <SoupsPageBG/>,
  },
  {
    path: "/BG/Pasta",
    element: <PastaPageBG/>,
  },
  {
    path: "/BG/HotDrinks",
    element: <HotDrinksPageBG/>,
  },
  {
    path: "/BG/HotDrinksWithAlchohol",
    element: <HotDrinksWithAlchoholPageBG/>,
  },
  {
    path: "/BG/BuilkWine",
    element: <BuilkWinePageBG/>,
  },
  {
    path: "/BG/RedWine",
    element: <RedWinePageBG/>,
  },
  {
    path: "/BG/Rose",
    element: <RosePageBG/>,
  },
  {
    path: "/BG/WhiteWine",
    element: <WhiteWinePageBG/>,
  },
  {
    path: "/BG/Beer",
    element: <BeerPageBG/>,
  },
  {
    path: "/BG/Other",
    element: <OtherPageBG/>,
  },
  {
    path: "/BG/Rakia",
    element: <RakiaPageBG/>,
  },
  {
    path: "/BG/Rum",
    element: <RumPageBG/>,
  },
  {
    path: "/BG/VodkaAndGin",
    element: <VodkaAndGinPageBG/>,
  },
  {
    path: "/BG/Whiskey",
    element: <WhiskeyPageBG/>,
  },
  {
    path: "/BG/ColdDrinks",
    element: <ColdDrinksPageBG/>,
  },
  {
    path: "/BG/AlchoholicDrinks",
    element: <ChooseAlchoholDrinkTypePageBG/>,
  },
  {
    path: "/BG/Drinks",
    element: <ChooseDrinkPageBG/>,
  },
  {
    path: "/BG/NonAlchoholicDrinks",
    element: <ChooseNonAlchoholicDrinkTypePageBG/>,
  },
  {
    path: "/BG/Wine",
    element: <ChooseWineTypePageBG/>,
  },
  {
    path: "/BG/Tatratea",
    element: <TatrateaPageBG/>,
  },

  {
    path: "/ENG/Pizzas",
    element: <PizzasPageENG/>,
  },
  {
    path: "/ENG/FoodOrDrink",
    element: <ChooseFoodOrDrinkPageENG/>,
  },
  {
    path: "/ENG/Food",
    element: <ChooseFoodPageENG/>,
  },
  {
    path: "/ENG/BBQ",
    element: <BBQPageENG/>,
  },
  {
    path: "/ENG/Appetizers",
    element: <AppetizersPageENG/>,
  },
  {
    path: "/ENG/Burgers",
    element: <BurgersPageENG/>,
  },
  {
    path: "/ENG/Desserts",
    element: <DessertsPageENG/>,
  },
  {
    path: "/ENG/Salads",
    element: <SaladsPageENG/>,
  },
  {
    path: "/ENG/Soups",
    element: <SoupsPageENG/>,
  },
  {
    path: "/ENG/Pasta",
    element: <PastaPageENG/>,
  },
  {
    path: "/ENG/HotDrinks",
    element: <HotDrinksPageENG/>,
  },
  {
    path: "/ENG/HotDrinksWithAlchohol",
    element: <HotDrinksWithAlchoholPageENG/>,
  },
  {
    path: "/ENG/BuilkWine",
    element: <BuilkWinePageENG/>,
  },
  {
    path: "/ENG/RedWine",
    element: <RedWinePageENG/>,
  },
  {
    path: "/ENG/Rose",
    element: <RosePageENG/>,
  },
  {
    path: "/ENG/WhiteWine",
    element: <WhiteWinePageENG/>,
  },
  {
    path: "/ENG/Beer",
    element: <BeerPageENG/>,
  },
  {
    path: "/ENG/Other",
    element: <OtherPageENG/>,
  },
  {
    path: "/ENG/Rakia",
    element: <RakiaPageENG/>,
  },
  {
    path: "/ENG/Rum",
    element: <RumPageENG/>,
  },
  {
    path: "/ENG/VodkaAndGin",
    element: <VodkaAndGinPageENG/>,
  },
  {
    path: "/ENG/Whiskey",
    element: <WhiskeyPageENG/>,
  },
  {
    path: "/ENG/ColdDrinks",
    element: <ColdDrinksPageENG/>,
  },
  {
    path: "/ENG/AlchoholicDrinks",
    element: <ChooseAlchoholDrinkTypePageENG/>,
  },
  {
    path: "/ENG/Drinks",
    element: <ChooseDrinkPageENG/>,
  },
  {
    path: "/ENG/NonAlchoholicDrinks",
    element: <ChooseNonAlchoholicDrinkTypePageENG/>,
  },
  {
    path: "/ENG/Wine",
    element: <ChooseWineTypePageENG/>,
  },
  {
    path: "/ENG/Tatratea",
    element: <TatrateaPageENG/>,
  },

  {
    path: "/RUS/Pizzas",
    element: <PizzasPageRUS/>,
  },
  {
    path: "/RUS/FoodOrDrink",
    element: <ChooseFoodOrDrinkPageRUS/>,
  },
  {
    path: "/RUS/Food",
    element: <ChooseFoodPageRUS/>,
  },
  {
    path: "/RUS/BBQ",
    element: <BBQPageRUS/>,
  },
  {
    path: "/RUS/Appetizers",
    element: <AppetizersPageRUS/>,
  },
  {
    path: "/RUS/Burgers",
    element: <BurgersPageRUS/>,
  },
  {
    path: "/RUS/Desserts",
    element: <DessertsPageRUS/>,
  },
  {
    path: "/RUS/Salads",
    element: <SaladsPageRUS/>,
  },
  {
    path: "/RUS/Soups",
    element: <SoupsPageRUS/>,
  },
  {
    path: "/RUS/Pasta",
    element: <PastaPageRUS/>,
  },
  {
    path: "/RUS/HotDrinks",
    element: <HotDrinksPageRUS/>,
  },
  {
    path: "/RUS/HotDrinksWithAlchohol",
    element: <HotDrinksWithAlchoholPageRUS/>,
  },
  {
    path: "/RUS/BuilkWine",
    element: <BuilkWinePageRUS/>,
  },
  {
    path: "/RUS/RedWine",
    element: <RedWinePageRUS/>,
  },
  {
    path: "/RUS/Rose",
    element: <RosePageRUS/>,
  },
  {
    path: "/RUS/WhiteWine",
    element: <WhiteWinePageRUS/>,
  },
  {
    path: "/RUS/Beer",
    element: <BeerPageRUS/>,
  },
  {
    path: "/RUS/Other",
    element: <OtherPageRUS/>,
  },
  {
    path: "/RUS/Rakia",
    element: <RakiaPageRUS/>,
  },
  {
    path: "/RUS/Rum",
    element: <RumPageRUS/>,
  },
  {
    path: "/RUS/VodkaAndGin",
    element: <VodkaAndGinPageRUS/>,
  },
  {
    path: "/RUS/Whiskey",
    element: <WhiskeyPageRUS/>,
  },
  {
    path: "/RUS/ColdDrinks",
    element: <ColdDrinksPageRUS/>,
  },
  {
    path: "/RUS/AlchoholicDrinks",
    element: <ChooseAlchoholDrinkTypePageRUS/>,
  },
  {
    path: "/RUS/Drinks",
    element: <ChooseDrinkPageRUS/>,
  },
  {
    path: "/RUS/NonAlchoholicDrinks",
    element: <ChooseNonAlchoholicDrinkTypePageRUS/>,
  },
  {
    path: "/RUS/Wine",
    element: <ChooseWineTypePageRUS/>,
  },
  {
    path: "/RUS/Tatratea",
    element: <TatrateaPageRUS/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


