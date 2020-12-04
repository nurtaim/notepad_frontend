import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Notepad from './components/Notepad';
import UserNotesContainer from './containers/UserNotesContainer'
import ThemedComponent from './components/ThemedComponent'
import UserLoginContainer from './containers/UserLoginContainer'
import WeatherContainer from './containers/WeatherContainer'
import {WeatherContext} from './weather-context'

import './App.css';

function App() {

  const[{notes, selectedNoteId}, setNoteData] = useState({notes: [], selectedNoteId: null})
  const[user, setUser] = useState({})
  const[loggedIn, setLoggedIn] = useState(false)
  // const[selectedNoteId, setSelectedNoteId] = useState(null)
  const[themeToggle, setThemetoggle] = useState(false)

  const [weather, setWeather] = useContext(WeatherContext)

  useEffect(() => {
    if (themeToggle) {
      const theme = loggedIn ? user.weather.icon : "clear"
      setWeather(theme)
    } else {
      setWeather("default")
    }
  }, [themeToggle])

  useEffect(()=> {
    if (user.notes) {
      setNoteData({selectedNoteId: selectedNoteId, notes: user.notes })
    }
  }, [user])

  useEffect(() => {
    if (loggedIn) {
      if (selectedNoteId) {
        updateNote()
      } else {
        createNote()
      }
    }
  }, [selectedNoteId, loggedIn])

  const createNote = () => {
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({title: "", content: "", user_id: user.id})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.id)
      // addNote(data)
      // setSelectedNoteId(data.id)
      setNoteData({notes: [...notes, data], selectedNoteId: data.id})
    })
  }

  const updateNote = () => {
    fetch(`http://localhost:3000/api/v1/notes/${selectedNoteId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(getSelectedNote())
    })
  }

  const handleChange = (e) => {
    setNoteData({notes:
      notes.map(note => {
        if(note.id === selectedNoteId) {
          let updatedNote = {...note, [e.target.name]: e.target.value}
          return updatedNote
        } else {
          return note
        }
      }), selectedNoteId: selectedNoteId}
    )
  }

  const changeTheme = () => {
    setThemetoggle(!themeToggle)
  }

  const getSelectedNote =()=> {
    if (selectedNoteId) {
      const n = notes.find(note => note.id === selectedNoteId)
      console.log(notes)
      return n
    }
    return {title: "", content: "", user_id: user.id}
  }

  const checkLogIn = () => {
    if (loggedIn) {
      return (
        <div>
          <Notepad
            // addNote={addNote}
            user={user}
            selectedNote={getSelectedNote()}
            handleChange={handleChange}
            createNote={createNote}
            themeToggle={themeToggle}
            changeTheme={changeTheme}
          />
          <UserNotesContainer
            selectedNoteId={getSelectedNote()}
            notes={notes}
            selectNote={selectNote}
          />
          <WeatherContainer
            weather={user.weather}
          />
        </div>
      )
    } else {
      return (
        <UserLoginContainer
          setCurrentUser={setCurrentUser}
        />
      )
    }
  }

  // const addNote = (note) => {
  //   setNotes([...notes, note])
  // }

  const selectNote = (newNote) => {
    updateNote()
    setNoteData({notes: notes, selectedNoteId: newNote.id})
  }

  const setCurrentUser = (newUser) => {
    setUser(newUser)
    setLoggedIn(true)
  }

  return (
    <div className="App">
      {checkLogIn()}
    </div>
  );
}

export default App;
