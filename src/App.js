import './scss/app.scss';
import React from 'react';
import Header from './Components/Header/Header';
import PlansForm from './Components/PlansForm/PlansForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="container">
          <PlansForm />
        </div>
      </div>
    </div>
  );
}

export default App;
