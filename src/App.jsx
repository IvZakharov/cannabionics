import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import React from 'react';
import Header from './Components/Header/Header';
import PlansForm from './Pages/PlansForm';
import PackageSelection from './Pages/PackageSelection';
import ActionPlan from './Pages/ActionPlan';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<PlansForm />} />
            <Route path="package-selection" element={<PackageSelection />} />
            <Route path="/action-plan" element={<ActionPlan />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
