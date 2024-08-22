import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ClassBinding from './components/class-binding';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
// import HoverImg from './components/iphone-hover';
// import StyleBind from './components/style-binding';
import EMIcalculator from './components/emi-calculator';
// import OverLay from './components/overlay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClassBinding /> */}
    {/* <HoverImg /> */}
    {/* <StyleBind /> */}
    <EMIcalculator />
    {/* <OverLay /> */}
  </React.StrictMode>
);
reportWebVitals();
