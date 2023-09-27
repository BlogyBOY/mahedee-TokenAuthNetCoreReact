import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'react-router-dom';
import App from './App';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Routes>
      <Route path="/" element={<App />} >
      </Route>
    </Routes>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});
