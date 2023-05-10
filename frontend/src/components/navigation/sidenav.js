import React from 'react'
import { Grid, Box, Avatar, Heading, Text } from "@chakra-ui/react"
import { FiMapPin, FiLayers, FiSettings, FiGrid, FiStar } from "react-icons/fi"
import { Link } from "react-router-dom"
import './nav.css';
import List from "../lists/list";
import Place from "../places/places";


function Sidenav() {
  return (
    <Box display="flex" flexDirection="column" position="absolute" px="6em" py="4em" bg="#272727" color="#FFFFFF" height="100vh" align="center">
      <Heading justify="center" as="h2" size="3xl" mb="1em">EatList</Heading>
      <Avatar display="flex" alignSelf="center" size="2xl" name="Placeholder" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
      <Text fontSize="xl" m="1em" as='b'>Your Name</Text>
      <Box border='1px' borderColor='black' borderRadius="10px" bg='#ffffff' color="#000000"><FiStar style={{ display: 'inline', marginRight: '1em' }}/>10 Reviews</Box>
      <Grid templateRows='repeat(6, 1fr)' align="left" my="12em" gap={12} >
        <Link><FiGrid style={{ display: 'inline', marginRight: '2em' }}/> Dashboard</Link>
        <Link to="/" elements={ List }><FiLayers style={{ display: 'inline', marginRight: '2em' }}/> Lists</Link>
        <Link to="/places" elements={ Place }><FiMapPin style={{ display: 'inline', marginRight: '2em' }} /> Places</Link>
        <Link to="/settings"><FiSettings style={{ display: 'inline', marginRight: '2em' }}/> Settings</Link>
      </Grid>
    </Box>
  )
}

export default Sidenav
