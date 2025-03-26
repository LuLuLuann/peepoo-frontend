////// stretch goal -- not working yet


import NavBarHeader from '../components/NavBarHeader.jsx'
import NavBarFooter from '../components/NavBarFooter.jsx'
import SignUpLogin from '../components/SignUpLogin.jsx'

function SignUpLoginPage() {
    return (
        <>
            <NavBarHeader />
            <h1>Sign Up / Login Page</h1>
            <SignUpLogin />
            <NavBarFooter />

        </>
    );
}

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default SignUpLoginPage;