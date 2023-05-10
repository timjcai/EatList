import React from 'react'
import { LinkBox } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Styledlink(props) {
  return (
    <Link to="/">
      {props.name}
    </Link>
  )
}

export default Styledlink
