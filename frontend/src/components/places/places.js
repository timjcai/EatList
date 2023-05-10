import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

const API_URL = "http://localhost:3000/api/v1/places";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function Place() {
  const [places, setPlaces] = useState([]);

  useEffect (()=>{
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPlaces(items);
      }
    })
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <h1> Places Page </h1>
      <Place places = {places} />
    </div>
  )
}

export default Place;
