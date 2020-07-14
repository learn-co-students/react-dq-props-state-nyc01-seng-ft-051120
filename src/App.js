import React, { Component } from 'react'
import MasterHog from './MasterHog'
import offspring from './db.js'
import './App.css'

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MasterHog />
      </div>
    )
  }

}
