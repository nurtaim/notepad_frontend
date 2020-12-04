import React from 'react';
import '../UserNote.css'
import {WeatherContext} from '../weather-context'

function UserNote(props) {

  const [weather, setWeather] = React.useContext(WeatherContext)

  console.log(props)
  const renderNote = () => {
    if (props.note.id === props.selectedNoteId.id) {
      return (
        <li id="baba" className="collection-item avatar">
          <i id="selected-note-icon" class="material-icons circle">note</i>
          <span id="note-card-title" className="title">
            {props.note.title ? props.note.title : "Untitled"}

          </span>
        </li>
      )
    } else {
      return (
        <li
        id="gaga"
        onClick={()=>props.selectNote(props.note)}
        className="collection-item avatar"
        style={{backgroundColor: weather.text, color: weather.background}}
        >
          <i id="note-icon" class="material-icons circle" style={{backgroundColor: weather.accent}}>note</i>
          <span id="note-card-title" className="title" >
            {props.note.title ? props.note.title : "Untitled"}
          </span>
        </li>
      )
    }
  }

  return (
    <div>{renderNote()}</div>
  )
}

export default UserNote;
