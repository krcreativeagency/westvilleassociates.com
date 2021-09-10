import { Helmet } from "react-helmet";
import "./home.scss";

const HomeComponent = ({ Heading1, Heading2, Description }) => {
  return Heading1 ? (
    <>
      <Helmet>
        <title>
          {Heading1} | {Heading2}
        </title>
        <link rel="canonical" href={`https://westvilleassociates.com/`} />
        <meta name="description" content={Description} />
      </Helmet>
      <div className="container">
        <h1>{Heading1}</h1>
        <h2>{Heading2}</h2>
        <p>{Description}</p>
      </div>
    </>
  ) : null;
};

export default HomeComponent;
