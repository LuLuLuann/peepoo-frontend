import NavBarHeader from '../components/NavBarHeader.jsx'
import NavBarFooter from '../components/NavBarFooter.jsx'
import ReviewForm from '../components/ReviewForm.jsx'

function ReviewFormPage() {
    return (
        <>
            <NavBarHeader />
            <h1>Review Form Page</h1>
            <ReviewForm />
            <NavBarFooter />

        </>
    );
}

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default ReviewFormPage;