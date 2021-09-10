import { useState } from "react";
import { Helmet } from "react-helmet";
import "./service.scss";

import PartyWallMatters from "../../assets/images/services/party-wall-matters.jpg";
import BuildingSurveys from "../../assets/images/services/building-surveys.jpg";
import DefectsAnalysis from "../../assets/images/services/defects-analysis.jpg";
import ProcurementAndTendering from "../../assets/images/services/procurement-and-tendering.jpg";
import ContractAdministration from "../../assets/images/services/contract-administration.jpg";
import PlannedMaintenanceProgrammes from "../../assets/images/services/planned-maintenance-programmes.jpg";

import fpws from "../../assets/images/fpws.gif";
import { useParams } from "react-router-dom";

const ServiceComponent = ({ Services }) => {
  const { slug } = useParams();

  const [Images] = useState({
    "party-wall-matters": PartyWallMatters,
    "building-surveys": BuildingSurveys,
    "defects-analysis": DefectsAnalysis,
    "procurement-and-tendering": ProcurementAndTendering,
    "contract-administration": ContractAdministration,
    "planned-maintenance-programmes": PlannedMaintenanceProgrammes,
  });

  return (
    <>
      <section className="service_component">
        <div className="container">
          {Services
            ? slug
              ? Services.filter((service) => service.slug === slug).map((service, index) => (
                  <>
                    <Helmet key={`helmet-${index}`}>
                      <title>{service.name} | Westville Associates</title>
                      <link rel="canonical" href={`https://westvilleassociates.com/service/${service.slug}`} />
                      <meta name="description" content={service.meta} />
                    </Helmet>
                    <div className="item" key={index}>
                      <div className="background" style={{ backgroundImage: `url(${Images[service.slug]})` }}></div>
                      <article>
                        <h1>{service.name}</h1>
                        <div className="separator"></div>
                        <p>{service.description}</p>
                        {service.slug === "party-wall-matters" ? (
                          <div className="member">
                            <div>
                              <br />
                              <br />
                              <p>We are members of the Faculty of Party Wall Surveyors.</p>
                            </div>
                            <div>
                              <img src={fpws} alt="fpws" />
                            </div>
                          </div>
                        ) : null}
                      </article>
                    </div>
                  </>
                ))
              : Services.map((service, index) => (
                  <div className="item" key={index}>
                    <div className="background" style={{ backgroundImage: `url(${service.image})` }}></div>
                    <article>
                      <h1>{service.name}</h1>
                      <div className="separator"></div>
                      <p>{service.description}</p>
                    </article>
                  </div>
                ))
            : null}
        </div>
      </section>
    </>
  );
};

export default ServiceComponent;
