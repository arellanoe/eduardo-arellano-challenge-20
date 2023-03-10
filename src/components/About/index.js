import React from 'react';
import ReactDOM from 'react-dom';

function About() {
  return (
    <section className="title">
      <h1 class="name">about: josephDeWoody</h1>
      <hr />
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
        </div>
      </div>
    </section>
  );
}

ReactDOM.render(<About />, document.getElementById('root'));
