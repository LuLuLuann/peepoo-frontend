import { useState } from 'react'
import NavBarMain from './components/NavBarHeader.jsx'
import NavBarFooter from './components/NavBarFooter.jsx'
import AddBathroom from './components/AddBathroom.jsx'
import BathroomProfile from './components/BathroomProfile.jsx'
import Homepage from './components/Homepage.jsx'
import ReviewForm from './components/ReviewForm.jsx'
import SignUpLoginPage from './components/SignUpLoginPage.jsx'
import UserProfile from './components/UserProfile.jsx'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Peepoo Frontend Test</h1>
      <NavBarMain />

      <NavBarFooter />
    </>
  )
}

export default App
