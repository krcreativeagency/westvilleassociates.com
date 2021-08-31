import "./scss/app.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderComponent from "./components/header/header";
import SliderComponent from "./components/slider/slider";

import HomeComponent from "./components/home/home";
import ServiceComponent from "./components/service/service";
import ContactComponent from "./components/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <SliderComponent />
      <HomeComponent />
      <ServiceComponent />
      <ContactComponent />
    </BrowserRouter>
  );
}

export default App;
