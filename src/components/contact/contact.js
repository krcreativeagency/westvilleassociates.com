import "./contact.scss";

import { ContactDetailsComponent } from "../header/header";

const ContactComponent = () => {
  return (
    <section className="contact_component">
      <div className="container">
        <div className="content">
          <h1>Contact us</h1>
          <p>
            If you need advice on your building project, no matter how big or small, we are here to help. As members of the Faculty of Party Wall
            Surveyors, we can advise on all party wall matters and as experienced Building Surveyors, we offer a no obligation 15 minute consultation.
          </p>
        </div>
        <ContactDetailsComponent />
        <ContactForm />
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <form name="contactFrm" id="contactFrm" autocomplete="off" method="GET">
      <fieldset>
        <input type="text" id="full_name" name="full_name" placeholder="* Your full name" required />
      </fieldset>
      <fieldset>
        <input type="email" id="email" name="email" placeholder="* Your Email address" required />
      </fieldset>
      <fieldset>
        <input type="tel" id="phone" name="phone" placeholder="* Your phone number" required />
      </fieldset>
      <fieldset>
        <textarea id="message" name="message" placeholder="* Please write your requirements here." spellcheck="false" required></textarea>
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
