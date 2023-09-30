import logo from './logo.svg';
import React, { Component } from 'react';
// import { Route } from 'react-router';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './components/Home';

import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Registration from './components/Auth/Registration';
import CreateUser from './components/User/CreateUser';
import UsersRole from './components/UsersRoles/UsersRoles';



import './App.css';

import SessionManager from './components/Auth/SessionManager';

const baseUrl = '/';

//--App
export default class App extends Component {
  static displayName = App.name;

  //export default function App() {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="./login" element={<Login />} />
          <Route path="./home" element={<Home />} />
          <Route path='/logout' element={Logout} />
          <Route path='/registration' element={Registration} />
        </Routes>
      </div>
    );
  }
}