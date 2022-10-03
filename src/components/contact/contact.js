import { ContactDetailsComponent } from "../header/header";
import { useState } from "react";
import base from "../../airtable";

import "./contact.scss";

const ContactComponent = ({
  Contact,
  Email,
  Phone,
  Address_One_Heading,
  Address_Two_Heading,
  Address_One,
  Address_Two,
}) => {
  return (
    <section className="contact_component">
      <div className="container" id="Contact">
        <div className="content">
          <h1>Contact us</h1>
          <p>{Contact}</p>
        </div>
        <nav className="addresses">
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <br />
            <span>
              <strong>{Address_One_Heading}</strong>
              <br /> {Address_One}
            </span>
          </div>
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <br />
            <span>
              <strong>{Address_Two_Heading}</strong>
              <br /> {Address_Two}
            </span>
          </div>
        </nav>
        <ContactDetailsComponent Email={Email} Phone={Phone} />
        <ContactForm />
      </div>
    </section>
  );
};

const ContactForm = () => {
  const InitialState = {
    full_name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [Contact, SetContact] = useState(InitialState);

  const HandleSubmit = (e) => {
    e.preventDefault();
    base("contact").create(
      [
        {
          fields: Contact,
        },
      ],
      function (err, records) {
        if (err) {
          alert("Sorry an error occurred. Please try again later.");
        }
        if (records) {
          alert("Your message has been sent. Thank you!");
          SetContact(InitialState);
        }
      }
    );
  };

  const HandleChange = (e) => {
    SetContact({ ...Contact, [e.target.name]: e.target.value });
  };

  return (
    <form
      name="contactFrm"
      id="contactFrm"
      autoComplete="off"
      method="POST"
      onSubmit={HandleSubmit}
    >
      <fieldset>
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="* Your full name"
          required
          value={Contact.full_name}
          onChange={HandleChange}
        />
      </fieldset>
      <fieldset>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="* Your Email address"
          required
          value={Contact.email}
          onChange={HandleChange}
        />
      </fieldset>
      <fieldset>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="* Your phone number"
          required
          value={Contact.phone}
          onChange={HandleChange}
        />
      </fieldset>
      <fieldset>
        <textarea
          id="message"
          name="message"
          placeholder="* Please write your requirements here."
          spellCheck="false"
          required
          onChange={HandleChange}
          value={Contact.message}
        />
      </fieldset>
      <fieldset>
        <label id="validation"></label>
      </fieldset>
      <fieldset>
        <button type="submit">Get in touch</button>
      </fieldset>
    </form>
  );
};

export default ContactComponent;
