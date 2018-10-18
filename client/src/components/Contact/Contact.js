import React from "react";
import "./Contact.css"

const Contact = () => (
  <div>

    <div id="main-container" className="container">
      <section className="main-section">
        <h1>Contact Info </h1>

        <form id="contact-form">
          <ul>
            <li>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Smith" required="required"/>
            </li>
            <li>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="example@gmail.com" required="required"/>
            </li>
            <li>
              <label for="message">Message</label>
              <textarea id="message" name="message" required="required"></textarea>
            </li>
          </ul>
          <input type="submit"/>
        </form>

      </section>
    </div>
   

    <footer>
      <div className="container">
        Sky Logger &copy; 
      </div>
    </footer>

  </div>
);

export default Contact;
