import { useState } from "react";
import "./service.scss";

import PartyWallMatters from "../../assets/images/services/party-wall-matters.jpg";
import BuildingSurveys from "../../assets/images/services/building-surveys.jpg";
import DefectsAnalysis from "../../assets/images/services/defects-analysis.jpg";
import ProcurementAndTendering from "../../assets/images/services/procurement-and-tendering.jpg";
import ContractAdministration from "../../assets/images/services/contract-administration.jpg";
import PlannedMaintenanceProgrammes from "../../assets/images/services/planned-maintenance-programmes.jpg";

const ServiceComponent = () => {
  const [Services] = useState([
    {
      name: "Party Wall Matters",
      slug: "party-wall-matters",
      image: PartyWallMatters,
      description: (
        <p>
          If you are undertaking work to your property, you may need to serve a party wall notice on your neighbours under the Party Wall etc. Act
          1996. The Act is an enabling piece of legislation that allows you to undertake works in set time frames but also protects your neighbour’s
          rights as well.
          <br />
          <br />
          We offer a free, 15 minutes, no obligation consultation to discuss any concerns or questions you may have, and we are often thanked for
          simplifying the legal jargon used in the Act and explaining the obligations required of you in less technical terms.
        </p>
      ),
    },
    {
      name: "Building Surveys",
      slug: "building-surveys",
      image: BuildingSurveys,
      description: (
        <p>
          With property being an extremely valuable asset, it makes a lot of sense to ensure what you see is what you are getting. We provide various
          levels of building surveys that will give you a comprehensive report on the state of the property as well as potential issues the property
          may face in the future. This information can be used to negotiate sale prices and gives you peace of mind to proceed with your purchase. We
          understand that time is of the essence and aim to have our reports to clients within 5 working days from inspection. Feel free to give us a
          call to discuss what type of survey you may need.
        </p>
      ),
    },
    {
      name: "Defects Analysis",
      slug: "defects-analysis",
      image: DefectsAnalysis,
      description: (
        <p>
          From a leaky roof to simple condensation issues, properties can often fall into disrepair for a variety of reasons. Our defects analysis
          reports will ascertain defects as well as offer remedial measures to put the defects right. This type of survey is often preferred to having
          a general builder give their views as we act as an impartial advisor. Your defect report can then be offered to several builders to provide
          quotations.
        </p>
      ),
    },
    {
      name: "Procurement and Tendering",
      slug: "procurement-and-tendering",
      image: ProcurementAndTendering,
      description: (
        <p>
          Getting quotations from contractors for works can be a minefield due to the various ways prices are compiled and delivered to the client. We
          can standardise this process by specifying your works in detail prior to putting the scope out to competitive tender. This ensures you are
          comparing like for like quotations, ensuring complete transparency. We can also undertake background check on your preferred contractors as
          well as prestart interviews to ask the correct questions that will give you further confidence in your project team.
        </p>
      ),
    },
    {
      name: "Contract Administration",
      slug: "contract-administration",
      image: ContractAdministration,
      description: (
        <p>
          Managing a project can be a delicate and time-consuming endeavour that can see costs spiral if not undertaken professionally and
          efficiently. We can advise on contract selection as well as your obligations so that you are protected against unforeseen issues. <br />
          <br />
          We can also administer the contract which, amongst other things, involves accurately valuing works so you only pay what is necessary at each
          stage via the issue of payment certificates. This is vital to ensure your works can be completed within budget should things go wrong with
          your chosen builder.
        </p>
      ),
    },
    {
      name: "Planned Maintenance Programmes",
      slug: "planned-maintenance-programmes",
      image: PlannedMaintenanceProgrammes,
      description: (
        <p>
          We can provide full and detailed planned maintenance schedules that can assist you in prioritising and budgeting for keeping your building
          in good repair. Whether you are a freeholder or a property manager we can provide you with a comprehensive report, commenting on the
          building elements, their condition and time scales for repairs and maintenance. In conjunction with a written report, we also provide a
          costed plan set over 5, 10 or 20 years that can be used to budget for the works and assist to set service charges that will enable funds to
          be raised accordingly.{" "}
        </p>
      ),
    },
  ]);

  return (
    <section className="service_component">
      <div className="container">
        {Services.map((service) => (
          <div className="item">
            <div className="background" style={{ backgroundImage: `url(${service.image})` }}></div>
            <article>
              <h1>{service.name}</h1>
              <div className="separator"></div>
              <p>{service.description}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceComponent;
