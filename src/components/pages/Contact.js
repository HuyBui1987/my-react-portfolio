import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/form.css';

//import validation helpers
import { validateEmail } from '../../utils/helpers';

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  //function to handle input changes on contact form
  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  //https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
  const handleEmptyField = (event) => {
    if (event.target.value.length === 0) {
      setError(`${event.target.name} field is required.`);
    } else {
      setError('');
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u5gwbp8', 'template_nts1yqk', form.current, 'f6dIrrX1fEOYc8AJF').then(
      () => {
        setError('Message successfully sent!');
        window.location.reload(false);
      },
      () => {
        setError(error);
      }
    );

    //error message handling
    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }
  };

  //return html content
  return (
    <section>
      <div className="container">
        <div className="content-headings">
          <h2 className="headings">Contact</h2>
          <p className="p">
            If you want to contact me for any questions. You can contact me via github or LinkedIn
            or you can also shoot me an email at{' '}
            <span>
              <a href="mailto:huybuixuan87@gmail.com">Xuan Huy Bui-(Ken)</a>
            </span>{' '}
            or use the contact form on this page.
          </p>
        </div>
        <div className="form-style">
          <form id="contact-form" ref={form}>
            <label htmlFor="name">
              <span>
                Name <span className="required">*</span>
              </span>
              <input
                value={name}
                name="name"
                onBlur={handleEmptyField}
                onChange={handleInputChange}
                type="text"
                placeholder="Input Your Name Here"
                id="name-input"
              />
            </label>

            <label htmlFor="email">
              <span>
                Email <span className="required">*</span>
              </span>
              <input
                value={email}
                type="email"
                name="email"
                onBlur={handleEmptyField}
                onChange={handleInputChange}
                placeholder="Input Your Email Here"
                id="email-input"
              />
            </label>

            <label htmlFor="message">
              <span>
                Message <span className="required">*</span>
              </span>
              <textarea
                value={message}
                name="message"
                type="text"
                onBlur={handleEmptyField}
                onChange={handleInputChange}
                placeholder="Leave Your Message Here"
                id="example-message"></textarea>
            </label>
            <div>
              {/* <label><span> </span><input type="submit" className="bttn" onClick={sendEmail} value="Submit" /></label> */}
              <button className="bttn" onClick={sendEmail}>
                Submit
              </button>
            </div>
          </form>
          {error && (
            <div>
              <p className="error-text">{error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
