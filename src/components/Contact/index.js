import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function MyContactForm() {
  const [myFormState, setMyFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [myErrorMessage, setMyErrorMessage] = useState('');

  const { name, email, message } = myFormState;

  function handleMyChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
  
      if (!isValid) {
        setMyErrorMessage('Please enter a valid email address');
      } else {
        setMyErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setMyErrorMessage(`${e.target.name} is a required field`);
      } else {
        setMyErrorMessage('');
      }
    }
  
    if (!myErrorMessage) {
      setMyFormState({ ...myFormState, [e.target.name]: e.target.value });
    }
  }
  function handleMySubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="justify-content-center" id="contact-section">
      <h1 data-testid="h1tag" className="contact">
      </h1>
      <hr />
      <form className="justify-content-center" id="contact-form">
        <div>
          <label htmlFor="name">name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleMyChange}
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleMyChange}
          />
        </div>
        <div>
          <label htmlFor="message">message:</label>
          <textarea
            className="form-control"
            name="message"
            defaultValue={message}
            onBlur={handleMyChange}
            rows="7"
          />
        </div>
        {myErrorMessage && (
          <div>
            <p className="error-text">{myErrorMessage}</p>
          </div>
        )}

        <div>
          <button
            data-testid="button"
            className="btn btn-outline-dark mt-4"
            type="submit"
            onSubmit={handleMySubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default MyContactForm;
