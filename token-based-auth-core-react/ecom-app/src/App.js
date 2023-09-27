import logo from './logo.svg';
import React, { Component } from 'react';
import { Route } from 'react-router';

import { Layout } from './components/Layout';
import { Home } from './components/Home';

import Login from './components/Auth/Login';
import CreateUser from './components/User/CreateUser';



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
          <Route exact path='/home' component={Home} />
          {/*
                <Route exact path='/home' component={Home} />

                <Route path='/logout' component={Logout} />
                <Route path='/registration' component={Registration} />


                <Route path='/banking/customers' component={Customers} />
                <Route path='/banking/customer/create' component={Create} />
                <Route path='/banking/customer/edit/:id' component={Edit}></Route>
                <Route path='/banking/customer/delete/:id' component={Delete}></Route>



                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />

                <Route path='/admin/users' component={Users}></Route>
                <Route path='/admin/user/edit/:id' component={UpdateUser}></Route>
                <Route path='/admin/user/delete/:id' component={DeleteUser}></Route>

                <Route path='/admin/roles' component={Roles}></Route>
                <Route path='/admin/role/create' component={CreateRole}></Route>
                <Route path='/admin/role/edit/:id' component={EditRole}></Route>
                <Route path='/admin/role/delete/:id' component={DeleteRole}></Route>

                <Route path='/admin/usersroles' component={UsersRole}></Route>
                <Route path='/admin/user/create' component={CreateUser}></Route>

              */}

        </Layout>

      ) : (

          <>
            <Layout>
              <Route path={'/', "/login"} component={Login} />
                  <Route path='/admin/user/register' component={CreateUser}></Route>
            </Layout>
          </>

        )
    );
  }
}