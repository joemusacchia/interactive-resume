import React from 'react'

const ContentTile = (props) => {
  return(
    <div id={props.id}>
      <h4>{props.heading}</h4>
      <p>{props.body}</p>
    </div>

  )
}

export default ContentTile
