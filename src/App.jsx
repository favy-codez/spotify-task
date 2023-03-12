import { useState } from 'react'

import './App.css'
import React from'react';
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import Login from "./components/Login"

function App() {
    return (
      <div className="App">
        <LeftSidebar />
        <Main />
        <RightSidebar />
  
        <header className="App-header">
        </header>
      </div>
    );
  }

export default App;