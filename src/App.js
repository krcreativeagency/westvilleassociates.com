import "./scss/app.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import base from "./airtable";

import HeaderComponent from "./components/header/header";
import SliderComponent from "./components/slider/slider";

import HomeComponent from "./components/home/home";
import ServiceComponent from "./components/service/service";
import ContactComponent from "./components/contact/contact";
import PrivacyPolicyComponent from "./components/privacy-policy/privacy-policy";
import { useEffect, useState } from "react";

function App() {
  const [Loading, SetLoading] = useState(true);
  const [Home, SetHome] = useState();
  const [Service, SetService] = useState();

  useEffect(() => {
    base("home")
      .select()
      .firstPage((err, records) => {
        if (err) console.error(err);
        const data = [];
        records.forEach(function (record) {
          data.push(record.fields);
        });
        SetHome(data);
        base("services")
          .select()
          .firstPage((err, records) => {
            if (err) console.error(err);
            const data = [];
            records.forEach(function (record) {
              data.push(record.fields);
            });
            SetService(data);
            SetLoading(false);
          });
      });
  }, []);

  return (
    <>
      <div className={`sb_Loader ${Loading ? "enabled" : "disabled"} `}>
        <div className="loading">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      </div>
      <BrowserRouter>
        <HeaderComponent
          Phone={Home ? Home.filter((content) => content.name === "phone")[0].description : null}
          Email={Home ? Home.filter((content) => content.name === "email")[0].description : null}
        />
        <Switch>
          <Route path="/" exact>
            <SliderComponent TagLine={Home ? Home.filter((content) => content.name === "slide")[0].description : null} />
            <section className="home_component">
              <HomeComponent
                Heading1={Home ? Home.filter((content) => content.name === "heading1")[0].description : null}
                Heading2={Home ? Home.filter((content) => content.name === "heading2")[0].description : null}
                Description={Home ? Home.filter((content) => content.name === "description")[0].description : null}
              />
            </section>
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicyComponent />
          </Route>
          <Route path="/service/:slug">
            <ServiceComponent Services={Service} />
          </Route>
          <Route path="/service">
            <ServiceComponent Services={Service} />
          </Route>
        </Switch>
        <ContactComponent
          Contact={Home ? Home.filter((content) => content.name === "contact")[0].description : null}
          Phone={Home ? Home.filter((content) => content.name === "phone")[0].description : null}
          Email={Home ? Home.filter((content) => content.name === "email")[0].description : null}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
