import Airtable from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`,
});
export default Airtable.base("appkMw7tGgm3PYv4H");
