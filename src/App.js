import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import AddUser from './Components/AddUser';
import DisplayUser from './Components/DisplayUser';
import Profile from './Components/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Navbar/>}>
        <Route index element = {<DisplayUser/>}/>
        </Route>
        <Route path = 'adduser' element = {<AddUser/>}/>
        <Route path = 'profile/:id' element = {<Profile/>}/>
        <Route path = 'edituser/:id' element = {<AddUser/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
