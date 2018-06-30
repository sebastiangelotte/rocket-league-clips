import React, { Component } from 'react'
import './App.css'
import Video from './components/Video.js'
import RandomButton from './components/RandomButton'

class App extends Component {
  render() {
    return (
      <div>
        <Video />
        <RandomButton />
      </div>
    )
  }
}

export default App
