import './App.css';
import axios from "axios";
import List from "./components/list"
import { useEffect, useState } from 'react';
import Sidenav from './components/navigation/sidenav';

const API_URL = "http://localhost:3000/api/v1/lists";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)

}

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setLists(items);
      }
    })
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <Sidenav />
      <h1>hello</h1>
      <List lists={ lists } />
    </div>
  );
}

export default App;
