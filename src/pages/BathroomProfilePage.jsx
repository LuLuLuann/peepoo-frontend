import { useState, useEffect } from 'react'
import axios from "axios"
import BathroomProfile from '../components/BathroomProfile.jsx'
import { useParams } from 'react-router-dom'

function BathroomProfilePage() {
    const [bathroom, setBathroom] = useState(null)
    const { id } = useParams()
    console.log(id)

    // gets 10 additional bathrooms in addition to Homepage
    useEffect(() => {
        const fetchBathroom = async () => {
            const res = await axios.get("/api/nycOpenDataPublicBathroomApi") // connect front and back -- getting the data
            console.log(res.data[id])
            const index = parseInt(id)
            setBathroom(res.data[index]) // puts the info we get back into the bathrooms state // id is the index #
            console.log(bathroom)
        }
        fetchBathroom()
    }, [id])
    return (
        <>
            <h1>Bathroom Profile Page</h1>
            <BathroomProfile bathroom={bathroom}/> // pass it down through props


        </>
    );
}

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default BathroomProfilePage;