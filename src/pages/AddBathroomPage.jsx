// import all of the components onto the pages
// written like a component page -- same setup

import NavBarHeader from '../components/NavBarHeader.jsx'
import NavBarFooter from '../components/NavBarFooter.jsx'
import AddBathroom from '../components/AddBathroom.jsx'

function AddBathroomPage() {
    return (
        <>
            
            <h1>Add Bathroom Page</h1>
            <AddBathroom />
          

        </>
    );
}

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default AddBathroomPage;