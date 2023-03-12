import { useState } from 'react'

import './App.css'
import React from'react';
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar"
import Main from "./components/Main"


function App() {
    return (
      <div className="App">
        <LeftSidebar />
        <Main />
        {/* <RightSidebar /> */}
  
        <header className="App-header">
        </header>
      </div>
    );
  }

export default App;