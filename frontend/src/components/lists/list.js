import React from 'react'
import axios from "axios";
import {useEffect, useState} from 'react';
import Card from './card';

const API_URL = "http://localhost:3000/api/v1/lists";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function List() {

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
    <>
      <h1>List Page</h1>
      <Card lists={ lists } />
    </>
  )
}

export default List;
