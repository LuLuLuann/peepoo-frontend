import NavBarHeader from '../components/NavBarHeader.jsx'
import NavBarFooter from '../components/NavBarFooter.jsx'
import ReviewForm from '../components/ReviewForm.jsx'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"


function ReviewFormPage() {
      const [bathroom, setBathroom] = useState(null)
    const { id } = useParams()
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
            <h1>Review Form Page</h1>
            {/* <ReviewForm /> */}
            {/* <ReviewForm bathroom={bathroom}/> */}
            <ReviewForm bathroomType={bathroom?.restroom_type} location={bathroom?.facility_name} />

        </>
    );
}

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default ReviewFormPage;