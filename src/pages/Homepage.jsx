import { useState, useEffect } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'

// import NavBarHeader from '../components/NavBarHeader.jsx'
// import NavBarFooter from '../components/NavBarFooter.jsx'


function Homepage() {
    const [searchTerm, setSearchTerm] = useState("") // stores my search term
    const [bathrooms, setBathrooms] = useState([])

      // gets 10 bathrooms
    useEffect(() => {
        const fetchBathrooms = async () => {
            const res = await axios.get("/api/nycOpenDataPublicBathroomApi") // connect front and back -- getting the data
            console.log(res.data)
            setBathrooms(res.data) // puts the info we get back into the bathrooms state

        }
        fetchBathrooms()
    }, [])
    return (
        <>

            <h1>Homepage</h1>
            {bathrooms.map((bathroom, index) => {
                return (
                    <NavLink to={`/bathrooms/${index}`} key={index}>
                        <h2>{bathroom.facility_name}</h2>
                    </NavLink>
                )
            })}
        </>
    );
}

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default Homepage;