import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { BrowserRouter, Routes } from 'react-router-dom';

import App from './src/App';
//import registerServiceWorker from './registerServiceWorker';

const baseUrl = '/';
//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

//https://www.appsloveworld.com/reactjs/100/2/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element'

const root = ReactDOM.createRoot(document.getElementById('root'));
//sroot.render(<App />);


ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement);

// render(
//   <BrowserRouter basename={baseUrl}>
//     <Routes>
//       <App />
//     </Routes>
//   </BrowserRouter>,
//   rootElement);

// ReactDOM.render(
//   <BrowserRouter basename={baseUrl}>
//     <Routes>
//       <App />
//     </Routes>
//   </BrowserRouter>,
//   rootElement);






