import NavBarHeader from '../components/NavBarHeader.jsx'
import NavBarFooter from '../components/NavBarFooter.jsx'
import ReviewForm from '../components/ReviewForm.jsx'

function ReviewFormPage() {
    return (
        <>
            <h1>Review Form Page</h1>
            {/* <ReviewForm /> */}
            <ReviewForm bathroomType={selectedBathroomType} location={selectedLocation} />


        </>
    );
}

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default ReviewFormPage;