import {NavLink} from "react-router-dom"

function NavBarHeader() {
    return (
        <nav style={styles}>

            {/* <a href  "../pages/AddBathroomPage.jsx">Add a new bathroom</a> */}
            
            <NavLink to="">My Profile Page (if logged in)</NavLink>

            {/* <NavLink to="/bathrooms/add-a-bathroom">Add a new Bathroom</NavLink> */}
           
                <NavLink to="user/SignUp-or-Login">Sign Up/Login /Log out</NavLink>
               
        </nav>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default NavBarHeader;