import { useState, useEffect } from 'react' // creates a temporary memory in the component (when you refresh it resets)
import axios from "axios"

// links to all components (if needed)
import NavBarHeader from './components/NavBarHeader'
import NavBarFooter from './components/NavBarFooter.jsx'
import AddBathroom from './components/AddBathroom.jsx'
import BathroomProfile from './components/BathroomProfile.jsx'
import ReviewForm from './components/ReviewForm.jsx'
import SignUpLogin from './components/SignUpLogin.jsx'
import UserProfile from './components/UserProfile.jsx'

// links to all pages (if needed)
import Homepage from './pages/Homepage.jsx'
import AddBathroomPage from './pages/AddBathroomPage.jsx'
import BathroomProfilePage from './pages/BathroomProfilePage.jsx'
import ReviewFormPage from './pages/ReviewFormPage.jsx'
import SignUpLoginPage from './pages/SignUpLoginPage.jsx'
import UserProfilePage from './pages/UserProfilePage.jsx'

import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'

function App() {


  return (

    <div>
      <NavBarHeader />
      <h1>Pee Poo Frontend Test</h1>

      {/* <p>This is where the search component will go </p> */}
      <hr />
      {/* <p>This is where the map view/ list view results will be able to be toggled or where the map will show up next to the list view.</p> */}

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/bathrooms/:id" element={<BathroomProfilePage />} />

        <Route path="/bathrooms/:id/review" element={<ReviewFormPage />}/>
        <Route path="/bathrooms/add-a-bathroom" element={<AddBathroomPage />}/>
        <Route path="/user/:id" element={<UserProfilePage />}/>
        <Route path="user/SignUp-or-Login" element={<SignUpLoginPage />} />

      </Routes>
      <hr />
      <NavBarFooter />
      {/* this is how to get it but it wouldnt
      <ReviewForm bathroomType={selectedBathroomType} location={selectedLocation} /> */}
    </div>
    
  )
}

export default App
