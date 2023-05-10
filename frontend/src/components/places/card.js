import React from 'react'

function Card(props) {
  return (
    <div>
      <h1>These places are from the API</h1>
      {props.places.map((place) => {
        return (
          <div key={place.slug}>
            <h2>{place.title}</h2>
            <p>{place.website}</p>
            <p>{place.menu}</p>
            <p>{place.location}</p>
          </div>
        );
       })}
    </div>
  )
}

export default Card
