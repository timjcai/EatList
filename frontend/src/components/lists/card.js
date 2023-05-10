import React from 'react'

function Card(props) {
  return (
    <div>
      <h1>These lists are from the API</h1>
      {props.lists.map((list) => {
        return (
          <div key={list.slug}>
            <h2>{list.title}</h2>
            <p>{list.description}</p>
          </div>
        );
       })}
    </div>
  )
}

export default Card
