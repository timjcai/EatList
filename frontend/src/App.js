import './App.css';
// import { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom"
import Sidenav from './components/navigation/sidenav';
import Place from './components/places/places'
import List from './components/lists/list'

function App() {


  return (
    <div className="App">
      <Sidenav />
      <Routes>
      <Route path="/" element={<List />}/>
        <Route path="/places" element={<Place />}/>
      </Routes>
    </div>
  );
}

export default App;
