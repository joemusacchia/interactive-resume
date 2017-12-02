import React from 'react'

const ContentTile = (props) => {
  return(
    <div id={props.id.replace(' ', '-')}>
      <input id={`toggle-${props.id}`.replace(' ', '-')} type="checkbox"/>
      <label htmlFor={`toggle-${props.id}`.replace(' ', '-')}><h4>{props.heading}</h4></label>
      <p id={`body-${props.id}`.replace(' ', '-')}>{props.body}</p>
    </div>

  )
}

export default ContentTile
