import React from 'react';
import { useState, useEffect } from 'react'
import '../Notepad.css'
import { weather, WeatherContext } from '../weather-context'

function Notepad(props) {

  console.log(props)

  const [weather, setWeather] = React.useContext(WeatherContext)

  return (
    <div>
      <form>
        <input
          id="note-title"
          placeholder="Title"
          onChange={(e)=>props.handleChange(e)}
          type="text"
          value={props.selectedNote.title}
          name="title"
          style={{color: weather.accent}}>
        </input>
        <div className="input-field" ></div>
          <textarea
            id="the-note"
            className="materialize-textarea"
            onChange={(e)=>props.handleChange(e)}
            type="textArea"
            value={props.selectedNote.content}
            name="content"
            style={{backgroundColor: weather.background, color: weather.text,}}
            >
          </textarea>
        <div/>
      </form>
      <a
        id="add-button-boi"
        onClick={()=>props.createNote()}
        className="btn-floating btn-large waves-effect waves-light"
        style={{backgroundColor: weather.accent, color: weather.text}}
        >
        <i class="material-icons medium">add</i>
      </a>
      <a 
        id="toggle-button"
        onClick={()=>props.changeTheme()}
        class="waves-effect waves-light btn"
        style={{backgroundColor: weather.accent, color: weather.text}}
      >
        {props.themeToggle ? "Default Theme" : "Live Theme"}
      </a>
    </div>
  );
}

export default Notepad;
