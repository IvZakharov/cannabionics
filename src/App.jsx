import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import React from 'react';
import Header from './Components/Header/Header';
import PlansForm from './Pages/PlansForm';
import PackageSelection from './Pages/PackageSelection';
import ActionPlan from './Pages/ActionPlan';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/cannabionics/" element={<PlansForm />} />
              <Route path="/cannabionics/package-selection" element={<PackageSelection />} />
              <Route path="/cannabionics/action-plan" element={<ActionPlan />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
