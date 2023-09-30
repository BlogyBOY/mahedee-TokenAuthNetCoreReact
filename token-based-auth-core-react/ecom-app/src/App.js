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



export default class App extends Component {
  static displayName = App.name;


  render() {
    return (

      // <div>
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

      // if (SessionManager.getToken()) {
      SessionManager.getToken() ? (
        <Layout>
          {/* <Route element={<div style={{ background: 'red' }} > <Outlet /> */}
          <h1>this is App.JS</h1>


          /*// {
            //Example for Outlet to act in place of Layout
            // <Routes>
            //     <Route path="/" element={<p>Home</p>} />
            //     <Route element={<div style={{ background: 'red' }} > <Outlet /> </div>}>
            //         <Route path="/login" element={<p>Login</p>} />
            //     </Route>
            // </Routes>


            // <BrowserRouter>
            //   <Routes>

          }*/
          <Route exact path='/home' element={Home} />

          <Route path='/logout' element={Logout} />
          <Route path='/registration' element={Registration} />


          {/* <Route path='/banking/customers' element={Customers} />
                <Route path='/banking/customer/create' element={Create} />
                <Route path='/banking/customer/edit/:id' element={Edit}></Route>
                <Route path='/banking/customer/delete/:id' element={Delete}></Route>

                <Route path='/counter' element={Counter} />
                <Route path='/fetch-data' element={FetchData} />

                <Route path='/admin/users' element={Users}></Route>
                <Route path='/admin/user/edit/:id' element={UpdateUser}></Route>
                <Route path='/admin/user/delete/:id' element={DeleteUser}></Route>

                <Route path='/admin/roles' element={Roles}></Route>
                <Route path='/admin/role/create' element={CreateRole}></Route>
                <Route path='/admin/role/edit/:id' element={EditRole}></Route>
                <Route path='/admin/role/delete/:id' element={DeleteRole}></Route> */}

          {/* <Route path='/admin/usersroles' element={UsersRole}></Route>
          <Route path='/admin/user/create' element={CreateUser}></Route> */}
          {/* </Routes>
            </BrowserRouter> */}

          {/* </ div>}>
        </Route > */}
        </Layout>
        //</Route>

      ) : (

        <>
          <Layout>
            <h1>ELSE this is App.JS</h1>
            {/* <Route> */}
            {/* <Route path={'/', "/login"} element={Login} /> */}

            {/* <Route path='/admin/user/register' element={CreateUser}></Route> */}
            {/* <Routes>
              <Route exact path='/home' element={Home} />
            </Routes> */}

            {/* <BrowserRouter>
              <Routes> */}
                {/* <Route path={'/', "/login"} element={Login} /> */}

                <Route exact path="/" element={<Login />} />
                <Route exact path="/" element={<Home />} />
                {/* <Route path="/quiz" element={<Quiz />} /> */}

              {/* </Routes>
            </BrowserRouter> */}

            {/* </Route> */}
          </Layout>
        </>

      )
    );
  }

}