import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home';
import WebForm from './pages/WebForm';
import UserStoryInput from './pages/UserStoryInput';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/userstory" element={<UserStoryInput />} />
        <Route exact path="/webform" element={<WebForm />} />



      </Routes>
    </Router>
  )
}

export default App