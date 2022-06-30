import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Info from './components/Info'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Info" element={<Info />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
