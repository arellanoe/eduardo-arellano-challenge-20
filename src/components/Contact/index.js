import React, { useState } from 'react';

function MyContactForm() {
  const [myFormState, setMyFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [myErrorMessage, setMyErrorMessage] = useState('');

  const { name, email, message } = myFormState;

  function handleMyChange(e) {
    setMyFormState({ ...myFormState, [e.target.name]: e.target.value });

    if (!e.target.value.length) {
      setMyErrorMessage(`${e.target.name} is a required field`);
    } else {
      setMyErrorMessage('');
    }
  }

  function handleMySubmit(e) {
    e.preventDefault();
   
  }

  return (
    <section className="justify-content-center" id="contact-section">
      <h1 className="contact"></h1>
      <hr />
      <form className="justify-content-center" id="contact-form">
        <div>
          <label htmlFor="name">name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={handleMyChange}
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={handleMyChange}
          />
        </div>
        <div>
          <label htmlFor="message">message:</label>
          <textarea
            className="form-control"
            name="message"
            value={message}
            onChange={handleMyChange}
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
            className="btn btn-outline-dark mt-4"
            type="submit"
            onClick={handleMySubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default MyContactForm;
