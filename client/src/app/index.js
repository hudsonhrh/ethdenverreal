import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import { Vote, Tasks, Leaderboard, Profile, Landing } from '../pages'


import 'bootstrap/dist/css/bootstrap.min.css'

const App = () =>{
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Landing/>} />
                <Route path="/vote" exact element={<Vote/>} />
                <Route path="/tasks" exact element={<Tasks/>} />
                <Route path="/leaderboard" exact element={<Leaderboard/>} />
                <Route path="/profile" exact element={<Profile/>} />
            </Routes>
        </Router>
    )
}

export default App