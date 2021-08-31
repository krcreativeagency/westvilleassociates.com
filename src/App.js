import "./scss/app.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderComponent from "./components/header/header";
import SliderComponent from "./components/slider/slider";

import HomeComponent from "./components/home/home";
import ServiceComponent from "./components/service/service";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/" exact>
          <SliderComponent />
          <HomeComponent />
          <ServiceComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
